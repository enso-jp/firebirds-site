import { execSync } from "node:child_process";

const output = execSync(
  "rg -n --hidden -g '!node_modules' -g '!.git' -g '!dist' -g '!package-lock.json' $'\\u2014' || true",
  { encoding: "utf8" },
);

if (output.trim()) {
  console.error("Em dash found:\n" + output);
  process.exit(1);
}

console.log("No em dashes found.");
