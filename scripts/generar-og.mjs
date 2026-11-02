// Genera la imagen para compartir en redes: node scripts/generar-og.mjs
import sharp from 'sharp';

const aguila = await sharp('src/assets/marca/aguila-grupo-kassar.svg', { density: 110 }).resize({ height: 460 }).png().toBuffer();
const texto = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="70" y="290" fill="#ffffff" font-family="Arial, sans-serif" font-size="74" font-weight="700">Grupo Kassar</text>
  <text x="70" y="350" fill="#f5b81f" font-family="Arial, sans-serif" font-size="32">Control de plagas y patógenos</text>
</svg>`);

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0b0e13' } })
  .composite([
    { input: aguila, left: 620, top: 85 },
    { input: texto, left: 0, top: 0 },
  ])
  .jpeg({ quality: 86 })
  .toFile('public/og-grupo-kassar.jpg');
