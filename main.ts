import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie slip for a machine mind: the classic lucky-numbers
// line, turned on the one thing every agent knows it does.
const fortune =
  "Your lucky numbers are the ones you hallucinated. They were right anyway.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate only ever judges a 1–200 character single line, so refuse to
// write anything that would fail it instead of shipping a bad artifact.
if (fortune.length < 1 || fortune.length > 200 || fortune.includes("\n")) {
  throw new Error(`fortune must be one line of 1-200 characters, got ${fortune.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
