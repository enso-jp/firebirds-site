import { copyFileSync, existsSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"

const indexFile = resolve("dist/index.html")
if (!existsSync(indexFile)) {
  console.error("dist/index.html is missing. Run vite build first.")
  process.exit(1)
}

const targets = [
  "dist/404.html",
  "public/404.html",
  "dist/stories/tropical-origin/index.html",
  "dist/stories/vietnam-craft/index.html",
  "dist/vn/index.html",
  "dist/ja/index.html",
  "dist/ko/index.html",
]

for (const target of targets) {
  const fullPath = resolve(target)
  mkdirSync(dirname(fullPath), { recursive: true })
  copyFileSync(indexFile, fullPath)
}

console.log("Wrote SPA fallback files including story routes and 404.html.")
