#!/bin/bash

set -e

INPUT_DIR="../doxygen-content"
OUTPUT_DIR="../gitbook-content"

# Clear output directory and recreate it
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

pagesJSONFile="${OUTPUT_DIR}/pages.json"
hiddenPagesJSONFile="${OUTPUT_DIR}/hidden-pages.json"

# Write an empty JSON object to the pages.json file. We'll loop through each file to determine its filename and title
# Using that, we can then determine which files are not included in the nav tree data and need to be manually added
# to the SUMMARY.md file. In this case, we also need to include a `hidden` property in the document's metadata, so 
# we need to know before processing each document which ones don't appear in the nav tree and should be hidden.
echo '{}' > "$pagesJSONFile"

files=$(find $INPUT_DIR -maxdepth 1 -type f -name '*.html' ! -name 'htmlpublisher-wrapper.html')

# Loop through all .html files in the input directory to get the document metadata
for file in $files; do
  # Get the document metadata and write it to the pagesJSONFile
  pandoc "$file" \
    -M pagesJSONFile=$pagesJSONFile \
    -M filename=$(basename $file) \
    --lua-filter=pandoc/get-document-metadata.lua > /dev/null
done

# Parse the all-components.js file to generate a summary
./parse-summary.js \
  --navtree-data=$INPUT_DIR/navtreedata.js \
  --target-top-level-header-title="ADK-Programmers-Guides" \
  --target-top-level-header-title-replacement="Application Development Kit (ADK)" \
  --summary-output-file=$OUTPUT_DIR/SUMMARY.md \
  --hidden-pages-output-file=$hiddenPagesJSONFile \
  --page-metadata-file=$pagesJSONFile \
  --migration-output-dir=$OUTPUT_DIR

# Loop through all .html files in the input directory, ignoring the search directory,
for file in $files; do
  echo "📄 Processing file $file"

  filename=$(basename "$file" .html)
  fileWithReplacedIndents="${OUTPUT_DIR}/${filename}-with-replaced-indents.html"
  cleanedFile="${OUTPUT_DIR}/${filename}-cleaned.html"
  outputFile="${OUTPUT_DIR}/${filename}.md"

  # Replace whitespace indentation in code blocks with an __INDENT__ placeholder, we'll replace it later with actual line breaks
  # This is necessary because pandoc strips consecutive whitespace that isn't inside a <code> block
  sed 's#<div class="line">  #<div class="line">__INDENT__#g' $file > $fileWithReplacedIndents

  # Clean up table HTML before conversion. This will replace <br> with a newline character
  # and it will flatten images. This is necessary to ensure that line breaks are handled
  # correctly in the markdown output Otherwise, pandoc will always think that tables
  # containing line breaks should be grid tables and will not convert them to simple
  # tables. We need to strip the HTML that will cause pandoc to convert the table
  # to a grid table before the conversion to markdown.
  # Note that pandoc will insert a random html template and will not retain the original
  pandoc "$fileWithReplacedIndents" -f html \
    -t html+raw_html \
    --lua-filter=./pandoc/clean-html.lua \
    -s \
    -o "$cleanedFile"

  # Remove the file with replaced indents
  rm $fileWithReplacedIndents

  # Convert the cleaned HTML file to markdown
  pandoc "$cleanedFile" -f html \
    -t markdown+pipe_tables-simple_tables-raw_html-native_divs-native_spans-grid_tables \
    -M filename=$(basename $file) \
    -M hiddenPagesJSONFile=$hiddenPagesJSONFile \
    --lua-filter=./pandoc/process-file.lua \
    --wrap=none \
    -s \
    -o "$outputFile" 

  # Remove the cleaned file
  rm $cleanedFile

  if [[ "$OSTYPE" == "darwin"* ]]; then
    SED_INPLACE=(-i '' )
  else
    SED_INPLACE=(-i)
  fi

  # 1) strip any HTML anchor in backticks+{=html}
  # 2) strip backticks+{=html} around <p>
  # 3) strip backticks+{=html} around </p>
  # 3) strip backticks+{=html} around <br/>
  # 4) unescape hint style attributes (e.g. hint style=\"info\" -> hint style="info")
  sed -E "${SED_INPLACE[@]}" \
    -e 's#`(<a[^>]*>[^`]*</a>)`\{=html\}#\1#g' \
    -e 's#`<p>`\{=html\}#<p>#g' \
    -e 's#`</p>`\{=html\}#</p>#g' \
    -e 's#`<br/>`\{=html\}#<br/>#g' \
    -e 's#(hint style=)\\\"([^"]*)\\\"#\1"\2"#g' \
    "$outputFile"

  echo "Converted $file to $outputFile"

  if grep -qE '^\[TABLE\][[:blank:]]*$' "$outputFile"; then
    echo "⛔️ Unconverted [TABLE] placeholder found in $outputFile" >&2
    # exit 1
  fi
done

# Move the index.md file to README.md so GitBook recognizes it as the root page
mv "$OUTPUT_DIR/index.md" "$OUTPUT_DIR/README.md"

# Clean up unneeded files
rm $pagesJSONFile
rm $hiddenPagesJSONFile

# Copy over all the source files as some documents may link to them
rsync -av \
  --exclude='*.html' \
  --exclude='*.md5'  \
  --exclude='*.md'  \
  --exclude='*.js'   \
  --exclude='*.map'  \
  --exclude='*.css'  \
  --exclude='*.tgz'  \
  "$INPUT_DIR/" "$OUTPUT_DIR/"
