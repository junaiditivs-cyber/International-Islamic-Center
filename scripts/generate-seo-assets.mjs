// Generates favicon / share-image assets from the existing logo. Run: node scripts/generate-seo-assets.mjs
// Visual brand is unchanged: the same logo artwork is only resized.
import sharp from 'sharp';
import fs from 'node:fs';

const logo = 'public/images/international-islamic-center-logo.webp'; // 256x256 source
const png = (size) => sharp(logo).resize(size, size, { kind: 'lanczos3' }).png({ compressionLevel: 9 }).toBuffer();

const [p16, p32, p48, p96, p180, p256] = await Promise.all([16, 32, 48, 96, 180, 256].map(png));

// Real multi-size ICO (16/32/48, PNG-encoded). The previous favicon.ico was a 32x32 PNG with an .ico name.
const images = [[16, p16], [32, p32], [48, p48]];
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(images.length, 4);
let offset = 6 + images.length * 16;
const dir = Buffer.concat(images.map(([s, buf]) => {
  const e = Buffer.alloc(16);
  e[0] = s; e[1] = s; e[2] = 0; e[3] = 0; e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12); offset += buf.length; return e;
}));
fs.writeFileSync('public/favicon.ico', Buffer.concat([header, dir, ...images.map(([, b]) => b)]));
fs.writeFileSync('public/favicon-48x48.png', p48);
fs.writeFileSync('public/favicon-96x96.png', p96);
fs.writeFileSync('public/apple-touch-icon.png', p180);
fs.writeFileSync('public/logo.png', p256);

// 1200x630 social share card: logo centred on the site's black background.
const logoCard = await sharp(logo).resize(420, 420).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#000000' } })
  .composite([{ input: logoCard, gravity: 'centre' }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-image.jpg');
console.log('SEO assets generated');
