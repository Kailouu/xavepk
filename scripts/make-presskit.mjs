// Build public/xav-press-kit.pdf from the press pack images.
// Usage: node scripts/make-presskit.mjs
import sharp from 'sharp'
import { writeFileSync } from 'fs'

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const pages = [
  `${root}/src/assets/xav-presspack-1.jpg`,
  `${root}/src/assets/xav-presspack-2.jpg`,
]

// Re-encode each page as a clean baseline JPEG and collect dimensions
const imgs = []
for (const p of pages) {
  const buf = await sharp(p).jpeg({ quality: 88, progressive: false }).toBuffer()
  const { width, height } = await sharp(buf).metadata()
  imgs.push({ buf, width, height })
}

// Minimal PDF writer: one image per page, page sized to the image (72dpi points, scaled to A4-ish width)
const chunks = []
const offsets = []
let pos = 0
function push(s) {
  const b = typeof s === 'string' ? Buffer.from(s, 'latin1') : s
  chunks.push(b)
  pos += b.length
}
function obj(n, body) {
  offsets[n] = pos
  push(`${n} 0 obj\n${body}\nendobj\n`)
}

push('%PDF-1.4\n')

const nPages = imgs.length
// object numbering: 1 catalog, 2 pages, then per page: page obj, content obj, image obj
const pageRefs = imgs.map((_, i) => `${3 + i * 3} 0 R`).join(' ')
obj(1, `<< /Type /Catalog /Pages 2 0 R >>`)
obj(2, `<< /Type /Pages /Kids [${pageRefs}] /Count ${nPages} >>`)

imgs.forEach((img, i) => {
  const pageN = 3 + i * 3
  const contentN = pageN + 1
  const imageN = pageN + 2
  const W = 595 // A4 width in points
  const H = Math.round((img.height / img.width) * W)
  const content = `q ${W} 0 0 ${H} 0 0 cm /Im${i} Do Q`
  obj(pageN, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Contents ${contentN} 0 R /Resources << /XObject << /Im${i} ${imageN} 0 R >> >> >>`)
  obj(contentN, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`)
  offsets[imageN] = pos
  push(`${imageN} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${img.width} /Height ${img.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.buf.length} >>\nstream\n`)
  push(img.buf)
  push(`\nendstream\nendobj\n`)
})

const xrefPos = pos
const maxObj = 2 + nPages * 3
let xref = `xref\n0 ${maxObj + 1}\n0000000000 65535 f \n`
for (let n = 1; n <= maxObj; n++) {
  xref += String(offsets[n]).padStart(10, '0') + ' 00000 n \n'
}
push(xref)
push(`trailer\n<< /Size ${maxObj + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`)

const out = `${root}/public/xav-press-kit.pdf`
writeFileSync(out, Buffer.concat(chunks))
console.log(`Wrote ${out} (${Math.round(pos / 1024)} KB, ${nPages} pages)`)
