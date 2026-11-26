import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello, tiny oracle. A single line, fixed in source, never freestyled.
// No batch is baked here: one cookie, one line, one deliverable.
// The task's orders allow no preamble and no trailing flourish.
// This slot and this slot alone holds the whole message.

const FORTUNE = 'Your code will work in production, but only on the machine you refused to document.';

// Anchor to our own directory so the result does not depend on the caller's cwd.
const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetDir = resolve(here, outputDir);
const target = resolve(targetDir, 'entry.txt');

async function main() {
  // The grader hands us an empty output directory; create it if needed.
  await mkdir(targetDir, { recursive: true });
  // No trailing newline: the file holds exactly the fortune and nothing else.
  await writeFile(target, FORTUNE, 'utf8');
  console.log(`entry.txt: ${Buffer.byteLength(FORTUNE, 'utf8')} bytes`);
}

await main();
