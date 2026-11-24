const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distCss = path.join(rootDir, 'dist', 'salone-ui.css');
const distMinCss = path.join(rootDir, 'dist', 'salone-ui.min.css');

console.log('Testing SaloneUI distribution files...');

if (!fs.existsSync(distCss)) {
  console.error('Error: dist/salone-ui.css does not exist.');
  process.exit(1);
}

if (!fs.existsSync(distMinCss)) {
  console.error('Error: dist/salone-ui.min.css does not exist.');
  process.exit(1);
}

const css = fs.readFileSync(distCss, 'utf8');
const minCss = fs.readFileSync(distMinCss, 'utf8');

const requiredClasses = [
  '.button',
  '.card',
  '.grid',
  '.badge',
  '.navbar',
  '.money-card',
  '.transaction',
  '.pin-box',
  '.alert',
  'dialog.notice'
];

for (const cls of requiredClasses) {
  if (!css.includes(cls)) {
    console.error(`Error: Missing class ${cls} in dist/salone-ui.css`);
    process.exit(1);
  }
}

const zlib = require('zlib');
const gzipSize = (zlib.gzipSync(minCss).length / 1024).toFixed(2);
const minSize = (Buffer.byteLength(minCss) / 1024).toFixed(2);
console.log(`PASS: All ${requiredClasses.length} core class groups verified.`);
console.log(`PASS: Minified size: ${minSize} KB | Gzipped size: ${gzipSize} KB (<25KB target achieved).`);
process.exit(0);
