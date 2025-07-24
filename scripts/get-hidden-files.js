#!/usr/bin/env node
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const rawArgs = process.argv.slice(2);

const args = rawArgs.reduce((acc, cur) => {
  if (cur.startsWith("--")) {
    const [key, value = true] = cur.slice(2).split("=");
    acc[key] = value;
  }
  return acc;
}, {});

console.log("Parse summary params: ", args);

if (Object.keys(args).length < 5) {
  console.error(
    `Usage: parse-summary.js --navtree-data=navtreedata.js --summary-output-file=./SUMMARY.md --migration-output-dir=./output`
  );
  process.exit(1);
}

if (
  !args["navtree-data"] ||
  !args["output-file"] ||
  !args["migration-output-dir"]
) {
  console.error(
    `Missing required arguments. Please provide --navtree-data, --output-file, and --migration-output-dir.`
  );
  process.exit(1);
}

const navTreeDataPath = args["navtree-data"];
const outputFilePath = args["output-file"];
const migrationOutputDir = args["migration-output-dir"];

const navTreeDataFile = fs.readFileSync(
  path.resolve(process.cwd(), navTreeDataPath),
  "utf8"
);

// Create a fresh context object for your file to run in
const sandbox = {};
vm.createContext(sandbox);

// Run the code; locals like `myVar` will become properties of sandbox
vm.runInContext(navTreeDataFile, sandbox);

if (!Array.isArray(sandbox.NAVTREE)) {
  console.error(
    "navtreedata.js does not contain an array called NAVTREE. Please check the input file."
  );
  process.exit(1);
}

function generateSummary(pages) {
  const lines = [];

  function walk(items, depth = 0, parentUrl = null) {
    console.log(`Parent: ${parentUrl}`);

    for (const [title, url, children] of items) {
      let pageTitle = title;

      // Child URLs can't be the same as the parent URL
      if (url === parentUrl) continue;

      // At the top level, we're only interested in the top level header item
      if (depth === 0) {
        if (title !== targetTopLevelHeaderTitle) continue;
        pageTitle = targetTopLevelHeaderTitleReplacement;
      }

      // Map index.md to README.md
      if (pageTitle === "index") pageTitle = "README";

      if (url.includes("#")) {
        // If the URL contains a hash skip this item, we don't support linking to anchors in the summary
        continue;
      }

      console.log(`   Processing page: ${pageTitle} (${url})`);

      // strip off “.html” and any hash, and replace with “.md”
      let mdLink = url.replace(/\.html.*$/, ".md");

      if (mdLink === "index.md") {
        // If the link is index.md, we want to link to README.md
        mdLink = "README.md";
      }

      const markdownFile = path.join(migrationOutputDir, mdLink);

      if (!fs.existsSync(markdownFile)) {
        throw new Error(`Markdown file does not exist: ${markdownFile}`);
      }

      lines.push(`${"  ".repeat(depth)}* [${pageTitle}](${mdLink})`);

      if (Array.isArray(children)) {
        walk(children, depth + 1, url);
      }
    }
  }

  walk(pages);
  return lines.join("\n") + "\n";
}

// generate the markdown
const summaryMd = `# Table of contents\n\n${generateSummary(sandbox.NAVTREE)}`;

fs.writeFileSync(outputFilePath, summaryMd, "utf8");
