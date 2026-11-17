import { createRequire } from 'node:module';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)))).flat();
}
const files = await walk('src');
const replacements = new Map();
let before = 0, after = 0;
for (const file of files.filter(f => /\.(png|jpe?g)$/i.test(f))) {
  const original = (await stat(file)).size;
  if (original < 40000) continue;
  const output = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const buffer = await sharp(file).rotate().resize({ width: 2560, height: 2560, fit: 'inside', withoutEnlargement: true }).webp({ quality: 85, alphaQuality: 100, effort: 6 }).toBuffer();
  if (buffer.length >= original) continue;
  await writeFile(output, buffer);
  replacements.set(path.basename(file), path.basename(output));
  before += original; after += buffer.length;
}
for (const file of files.filter(f => /\.(tsx?|jsx?|css)$/.test(f))) {
  const original = await readFile(file, 'utf8');
  let updated = original;
  for (const [from, to] of replacements) updated = updated.split(from).join(to);
  if (updated !== original) await writeFile(file, updated);
}
console.log(`Optimized ${replacements.size} images: ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB. Original images retained.`);
