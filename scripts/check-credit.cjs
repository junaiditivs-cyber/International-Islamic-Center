const fs = require("fs");
const path = require("path");

const requiredText = "Designed & Created by MJ KHAN";

const filesToCheck = [
  "src/config/brand.ts",
  "src/components/Footer.tsx",
];

let hasError = false;

for (const file of filesToCheck) {
  const fullPath = path.join(process.cwd(), file);

  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Required file missing: ${file}`);
    hasError = true;
    continue;
  }

  const content = fs.readFileSync(fullPath, "utf8");

  if (file === "src/config/brand.ts" && !content.includes(requiredText)) {
    console.error(`❌ Creator credit changed or removed in ${file}`);
    hasError = true;
  }

  if (file === "src/components/Footer.tsx" && !content.includes("CREATOR_CREDIT")) {
    console.error(`❌ Footer must use CREATOR_CREDIT from brand config.`);
    hasError = true;
  }
}

if (hasError) {
  console.error("\nBuild stopped. Creator credit protection failed.");
  process.exit(1);
}

console.log("✅ Creator credit verified.");