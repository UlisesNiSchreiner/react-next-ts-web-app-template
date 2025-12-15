import fs from "node:fs";
import path from "node:path";

const newName = process.argv[2];
if (!newName) {
  console.error("Usage: npm run init-template <new-app-name>");
  process.exit(1);
}

const root = process.cwd();

const pkgPath = path.join(root, "package.json");
const readmePath = path.join(root, "README.md");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

const oldName = pkg.name;

pkg.name = newName;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

let readme = fs.readFileSync(readmePath, "utf8");
readme = readme.replaceAll(oldName, newName);
readme = readme.replaceAll("<YOUR_REPO>", newName);
fs.writeFileSync(readmePath, readme);

console.log(`Template initialized: ${oldName} -> ${newName}`);
