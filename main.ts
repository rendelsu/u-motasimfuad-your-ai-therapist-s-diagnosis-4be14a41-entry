import fs from "node:fs";
import path from "node:path";

// Joke mechanic: a calm clinical label inventories digital avoidance, then
// the houseplant's promotion reframes that avoidance as a preference for the
// one listener who never expects a reply.
const line = "Diagnosis: chronic tab-hoarding with acute 'I'll reply tomorrow' syndrome — 47 tabs open, 312 messages unread, and one houseplant promoted to therapist; it never expects a reply.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
fs.chmodSync(path.join(outDir, "entry.txt"), 0o644);
