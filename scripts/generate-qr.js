import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Target URL - points to the actual live portfolio repository on GitHub Pages
const targetUrl = process.argv[2] || 'https://muhilarasan-t.github.io/Portfolio/';

console.log(`Generating QR code for: ${targetUrl}`);

const pngPath = path.join(publicDir, 'portfolio_qr.png');
const svgPath = path.join(publicDir, 'portfolio_qr.svg');

// High resolution PNG with margin for resumes
QRCode.toFile(
  pngPath,
  targetUrl,
  {
    width: 600,
    margin: 2,
    color: {
      dark: '#070c18', // Deep navy matching portfolio theme
      light: '#ffffff'
    },
    errorCorrectionLevel: 'H'
  },
  (err) => {
    if (err) throw err;
    console.log(`✓ High-resolution QR code PNG created at: ${pngPath}`);
  }
);

// Scalable vector SVG
QRCode.toFile(
  svgPath,
  targetUrl,
  {
    type: 'svg',
    margin: 2,
    color: {
      dark: '#070c18',
      light: '#ffffff'
    },
    errorCorrectionLevel: 'H'
  },
  (err) => {
    if (err) throw err;
    console.log(`✓ Scalable vector QR code SVG created at: ${svgPath}`);
  }
);
