import fs from "fs";
import vm from "vm";
import path from "path";

export function getNavTreeData(navTreeDataPath) {
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

  return sandbox.NAVTREE;
}
