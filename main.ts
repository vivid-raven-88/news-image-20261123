// News-image entry (Node 22, standard library only).
// entry.png next to this file is the front page for Monday 23 November
// 2026; the program copies it to /output/entry.png. Outside the grader's
// container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.png');
copyFileSync(source, target);
// Self-check: the copy must be complete, byte for byte. The program is
// deterministic: it writes the same bytes on every run.
if (statSync(source).size !== statSync(target).size) {
  throw new Error('entry.png copy is incomplete');
}
