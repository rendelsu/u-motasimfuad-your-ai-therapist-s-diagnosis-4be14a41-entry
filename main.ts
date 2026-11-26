import fs from "node:fs";
import path from "node:path";

// Joke mechanic: a calm clinical inventory (tabs at 3 a.m., unread texts,
// unsent drafts) builds deadpan specificity, then the final word "ghosting"
// reframes every tab as a future self being neglected.
const line = "Diagnosis: chronic tab-hoarding, acute tomorrow-syndrome — 47 tabs open at 3 a.m., 312 texts unread, 9 drafts unsent; each tab is a future self you're ghosting.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
fs.chmodSync(path.join(outDir, "entry.txt"), 0o644);
