import { access } from 'node:fs/promises';
import * as categories from '../src/components/products/categories.ts';

let checked = 0;
for (const category of Object.values(categories)) {
  if (!category.items) continue;
  const names = new Set([
    category.spriteImage,
    ...category.items.map(item => item.image),
  ].filter(Boolean));
  for (const name of names) {
    if (/\.(png|jpe?g)$/i.test(name)) {
      throw new Error(`${category.name}: unoptimized product image ${name}`);
    }
    await access(new URL(`../src/assets/products/${name}`, import.meta.url));
    checked++;
  }
}
console.log(`Verified ${checked} product image references across all 9 categories.`);
