import fs from "node:fs";
import path from "node:path";

// Joke mechanic: a calm clinical label reframes tab-hoarding as a symptom,
// then the final word "ghosting" turns each tab into a neglected future self.
const line = "Diagnosis: chronic tab-hoarding — 47 open tabs, each a future self you are actively ghosting.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
fs.chmodSync(path.join(outDir, "entry.txt"), 0o644);
