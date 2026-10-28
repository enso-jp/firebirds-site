import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const indexFile = resolve("dist/index.html");
if (!existsSync(indexFile)) {
  console.error("dist/index.html is missing. Run vite build first.");
  process.exit(1);
}

copyFileSync(indexFile, resolve("dist/404.html"));
copyFileSync(indexFile, resolve("public/404.html"));
console.log("Wrote dist/404.html and public/404.html from dist/index.html");
