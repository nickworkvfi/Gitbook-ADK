# Verifone -> GitBook Content Pipeline

This repository contains the content pipeline used for Verifone docs published in GitBook. This pipeline converts Doxygen docs into Markdown which are then subsequently published to a GitBook site. At a high level it works like this:

- Find all `.html` files in the `doxygen-content` directory
- Get the metadata for each page
- Generate a SUMARY.md file
- Convert each page to Markdown and move to the `gitbook-content` directory
- Copy over all assets from `doxygen-content` to `gitbook-content` so assets can be referenced from Markdown files

## Tech

We're using [Pandoc](https://pandoc.org/) to convert the HTML output of the Doxygen docs into Markdown. Previously Doxybook2 was being used to convert the XML docs into Markdown, but the output wasn't great and it couldn't easily be extended. The project was also abandoned.

You'll need a Linux shell, Pandoc, Node.JS and an rsync binary available to run the migration script. The script has been built with cross platform compatibility in mind, the only gotcha may be with the regex used in the script which can be tricky to make platform agnostic.

## Migration Steps

The bulk of the logic is in the `convert.sh` file. We loop through each `.html` file in the input folder, then perform various steps per-file:

### Get Document Metadata

Before processing each document, we need to infer some metadata from each document (filename / title). We need to do this before processing each document because we need to know which documents are "hidden", i.e. which documents are referenced by other documentation files, but do not exist in the site navigation. This is necessary because our `SUMMARY.md` file needs to be conclusive of every visitable page in the space.

### Generate SUMMARY.md file

The SUMMARY.md file is GitBook's source of truth for the documentation pages that exist in a Space. If a Markdown file isn't included in SUMMARY.md, it won't appear in GitBook, and it can't be linked to by another page (the link will go to GitHub instead). We parse the `navtreedata.js` file from Doxygen which contains the full navigation tree. We then generate a summary file from it. There's a few caveats:

- The same file can only be referenced once in SUMMARY.md, otherwise it would imply it exists in multiple locations in GitBook.
- Pages in the summary file can't be targeted at headers in other pages — you can only link to the page itself
- Only pages can exist in the summary file. Pages can be nested under each other, but the "parent" page is always a page itself — you can't create arbitrary categories there's no way to set an arbitrary "category" that contains pages but it itself is not a page.
- Files that aren't part of the navigation tree need to exist in this summary to be viewable in GitBook. Not all files need to be visible in the nav, so many will appear in SUMMARY.md but will be hidden in the document's metadata. We use the document metadata from the previous step to understand

In order to parse the correct nav tree, the script needs to be made aware of the top level section in the nav tree that should be used to generate the summary file. This is currently hardcoded to `ADK-Programmers-Guides`, of which the title is then replaced with the hardcoded value `Application Development Kit (ADK)`. This can be updated in `./convert.sh`.

### Replace Indentation

Replace all indentation in code blocks with an `__INDENT__` placeholder. Unlike the other cleaning, this is done in a shell using `sed`. We do this because Pandoc will strip any consecutive whitespace that isn't inside a `<code>` block. Doxygen doesn't wrap code snippets in code blocks so this is necessary to ensure the indendation is preserved. We do a mass replacement of those placeholders later.

### Clean HTML

We need to clean some HTML before the actual conversion to Markdown as it causes Pandoc to make decisions about the output element which can't be changed during the conversion.

We replace any block level content in tables before the markdown conversion script is invoked. If we didn't do this, Pandoc would always generate grid tables which aren't supported in GitBook (only pipe tables). We need to do this before the Markdown conversion because Pandoc makes its decision about what format the output table should be when the script is invoked.

This involves using Pandoc to convert HTML -> HTML with the `clean-html.lua` Lua filter, ensuring the HTML is "clean" before we do the actual Markdown conversion. The Lua filter does the following:

- **Replace \<br> line breaks —** Replace any `<br>` instances with a newline character
- **Replace images with \<span> placeholders —** Flatten any images into a `<span>` placeholder with the image src set as an attribute. We replace this placeholder later in the `process-file.lua` script with an actual image.
- **Flatten code blocks** — Flatten code blocks into real `<code>` blocks
- **Flatten \<dl> elements** — Flatten `<dl>` elements into a plain block prefixed with `Note:` (the hardcoding of this prefix could be removed in future)
- **Ignore colspan** — Remove `colspan` attributes from cells (any colspan > 1 will cause a grid table to be generated)
- **Replace \<p> and \<br/> elements with \<span> placeholders** — Detect the start and end of paragraphs and replace `<p>` / `</p>` elements with `<span class="internal-start-p"/>` and `<span class="internal-end-p"/>` elements as well as `<br/>` elements with `<span class="internal-line-break"/>` elements. Paragraphs and line breaks are block elements which will force a grid table format. We replace these placeholders with the real HTML tags at the end of the Markdown conversion script as GitBook supports block level elements in pipe tables, but Pandoc does not.
- **Replace Headers with plain text** — Headers are block level and will force a grid table format.

### Conversion to Markdown

Once we have a "clean" file we can do the actual conversion to Markdown. This is done using Pandoc and the `process-file.lua` Lua filter. We pass the filename in as metadata and the path to the JSON file with the map of all pages. The Lua filter will then:

- **Ignore all \<h1 class="title">** — this is an auto-injected header from Doxygen that matches the page title which comes from the document metadata in GitBook. We remove it to avoid repetition
- **Trim leading/trailing whitespace from headers** — avoids unnecessary whitespace
- **Append anchor links to headers** — in order to have a custom ID to reference a header in an anchor link, we append a `<a id="$HEADER_ID">` to each header. Pandoc will automatically escape the HTML, we'll unescape it later.
- **Strip unnecessary attributes and classes from elements** — these classes and attributes have no effect in a semantic format like markdown.
- **Format Doxygen formatted code blocks with the .fragment class** — we replace the `__INDENT__` indentation placeholder with a white space. We then flatten the content of the Doxygen code block and return a `<code>` block using `cpp` syntax as it doesn't appear to be possible to detect the language used and cpp was used most commonly.
- **Determine the document title** — it's not included in the metadata of the file. We find a div with the `.title` class and infer the document title from this.
- **Ignore all \<div class="titlearea"> elements** — they're not useful to retain
- **Detect image caption elements** — if we discover an image element and an adjacent `<div class="caption">` , we then set the caption directly on the image so it's attached to the image in markdown.
- **Ignore \<div class="ttc"> and \<div class="navpath"> elements** — they're not shown in the regular Doxygen output so we shouldn't retain them in Markdown
- **Detect same-page links** — when a link is used to a header in the same page, Doxygen generates anchor elements that include the current page's file name in the href. GitBook only recognizes same-page links if only the `#header-id` is in the URL. We detect if the link is targeting the same file then replace the link target with the header ID, which must be lowercased as GitBook automatically lowercases all header IDs (even custom ones).
- **Replace .html links with .md links** — links to other documentation files need to have their `.html` extension replaced with `.md` otherwise a link to GitHub will be generated.
- **Replace all \<span> image placeholders** — we convert these into actual image elements which ensures Pandoc still generates pipe tables when they're used within a table.
- **Replace all \<span class="internal-start-p"/> and \<span class="internal-end-p"/> elements** — we convert these into a span with some raw inline HTML `<p>` and `</p>` tags. The HTML will be escaped, we'll unescape it later.
- **Omit all empty spans** — if they aren't removed they'll be visible in the generated markdown and serve no purpose.
- **Remove all unnecessary metadata** — this keeps the markdown file small. We only retain `title` and `hidden`&#x20;

### Unescape HTML

As the conversion to markdown generates some HTML from Pandoc which is escaped, we unescape the following HTML:

- **\<a> tags used in headers**
- **\<p> and \</p> tags used in tables**
- **\<br/> tags used to represent line breaks**

### Detect unconverted tables

Tables are used extensively in Doxygen docs and some usages of tables cannot easily be converted to markdown. A common case is when a table is nested inside of another table. When this happens, Pandoc will insert a `[TABLE]` placeholder into the generated markdown. The script will detect these and log out the file with the unconverted table.

### Move index.md to README.md

GitBook expects there to be a README.md file which is seen as the "root" of the docs. We rename `index.md` to `README.md` — should the index file name change from Doxygen this will need to be updated.
