import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

await sharp(fileURLToPath(new URL('../public/og-source.svg', import.meta.url)))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));

console.log('Generated public/og.png (1200 × 630).');
