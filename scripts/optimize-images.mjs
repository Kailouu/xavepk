// One-off: convert gallery/hero JPGs to WebP (max 1600px wide, q80).
// Usage: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join } from 'path'

const dir = new URL('../src/assets', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

for (const file of readdirSync(dir)) {
  if (!/^xav-.*\.jpg$/.test(file)) continue
  const out = join(dir, file.replace(/\.jpg$/, '.webp'))
  const info = await sharp(join(dir, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  console.log(`${file} -> ${file.replace(/\.jpg$/, '.webp')} (${Math.round(info.size / 1024)} KB)`)
}
