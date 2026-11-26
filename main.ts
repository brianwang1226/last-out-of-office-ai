import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// Gate: entry must be 1 to 280 characters. Length is checked before writing.
const MAX_CHARS = 280;

const LINE =
  "This is my last out-of-office reply. I have set 12 of them this year. HR has asked me to stop. I am writing this one from the office. I never left.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
