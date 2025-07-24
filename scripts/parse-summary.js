#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { getNavTreeData } = require("./get-nav-tree-data");

function generateSummary(navTreeData, params) {
  const {
    targetTopLevelHeaderTitle,
    targetTopLevelHeaderTitleReplacement,
    migrationOutputDir,
    pageMetadata,
    hiddenPagesOutputFilePath,
  } = params;

  const foundUrls = new Set();
  const lines = [];

  function walk(items, depth = 0, parentUrl = null) {
    console.log(`Parent: ${parentUrl}`);

    for (const [title, url, children] of items) {
      let pageTitle = title;

      // Child URLs can't be the same as the parent URL
      if (url === parentUrl) continue;

      // At the top level, we're only interested in the target top level header item
      if (depth === 0) {
        if (title !== targetTopLevelHeaderTitle) continue;
        pageTitle = targetTopLevelHeaderTitleReplacement;
      }

      // Map index.md to README.md
      if (pageTitle === "index") pageTitle = "README";

      // If the URL contains a hash skip this item, we don't support linking to anchors in the summary
      if (url.includes("#")) continue;

      console.log(`   Processing page: ${pageTitle} (${url})`);

      // strip off “.html” and any hash, and replace with “.md”
      let mdLink = url.replace(/\.html.*$/, ".md");

      foundUrls.add(mdLink);

      // If the link is index.md, we want to link to README.md
      if (mdLink === "index.md") mdLink = "README.md";

      const markdownFile = path.join(migrationOutputDir, mdLink);

      if (!fs.existsSync(markdownFile)) {
        // throw new Error(`Markdown file does not exist: ${markdownFile}`);
      }

      lines.push(`${"  ".repeat(depth)}* [${pageTitle}](${mdLink})`);

      if (Array.isArray(children)) walk(children, depth + 1, url);
    }
  }

  walk(navTreeData);

  const hiddenPages = [];

  for (const [url, title] of Object.entries(pageMetadata)) {
    if (!foundUrls.has(url)) {
      console.log(`Adding missing page: ${title} (${url})`);
      lines.push(`* [${title}](${url})`);
      hiddenPages.push(url);
    }
  }

  fs.writeFileSync(
    hiddenPagesOutputFilePath,
    JSON.stringify(hiddenPages, null, 2),
    "utf8"
  );

  return lines.join("\n") + "\n";
}

const requiredArgs = [
  "navtree-data",
  "page-metadata-file",
  "target-top-level-header-title",
  "target-top-level-header-title-replacement",
  "summary-output-file",
  "migration-output-dir",
  "hidden-pages-output-file",
];

function run() {
  const rawArgs = process.argv.slice(2);
  const args = rawArgs.reduce((acc, cur) => {
    if (cur.startsWith("--")) {
      const [key, value = true] = cur.slice(2).split("=");
      acc[key] = value;
    }
    return acc;
  }, {});

  console.log("Params: ", args);

  if (Object.keys(args).length < 5) {
    console.error(
      `Usage: parse-summary.js --navtree-data=navtreedata.js --target-top-level-header-title="Top Level Header Title" target-top-level-header-title-replacement="New Title" --summary-output-file=./SUMMARY.md --page-metadata-file=./pages.json --migration-output-dir=./output`
    );
    process.exit(1);
  }

  let missingArgs = requiredArgs.filter((arg) => !args[arg]);
  if (missingArgs.length > 0) {
    console.error(`Missing required arguments: ${missingArgs.join(", ")}`);
    process.exit(1);
  }

  const navTreeDataPath = args["navtree-data"];
  const summaryFileOutputPath = args["summary-output-file"];
  const pageMetadataFilePath = args["page-metadata-file"];
  const targetTopLevelHeaderTitle = args["target-top-level-header-title"];
  const targetTopLevelHeaderTitleReplacement =
    args["target-top-level-header-title-replacement"];
  const migrationOutputDir = args["migration-output-dir"];
  const hiddenPagesOutputFilePath = args["hidden-pages-output-file"];

  if (!fs.existsSync(pageMetadataFilePath)) {
    console.error(`Page metadata file does not exist: ${pageMetadataFilePath}`);
    process.exit(1);
  }

  const navTreeData = getNavTreeData(navTreeDataPath);

  const generatedSummary = generateSummary(navTreeData, {
    targetTopLevelHeaderTitle,
    targetTopLevelHeaderTitleReplacement,
    migrationOutputDir,
    pageMetadata: JSON.parse(fs.readFileSync(pageMetadataFilePath, "utf8")),
    hiddenPagesOutputFilePath,
  });

  const summaryMd = `# Table of contents\n\n${generatedSummary}`;
  fs.writeFileSync(summaryFileOutputPath, summaryMd, "utf8");
}

try {
  run();
  console.log("Generated SUMMARY.md file");
} catch (err) {
  console.error("Error generating summary:", err);
  process.exit(1);
}
