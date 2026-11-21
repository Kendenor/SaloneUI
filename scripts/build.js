#!/usr/bin/env node
/*
 * SaloneUI build: copy src -> dist & docs/dist, then minify.
 * Pure Node, no dependencies. Run: npm run build
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'src', 'salone-ui.css');
const distDir = path.join(root, 'dist');
const docsDistDir = path.join(root, 'docs', 'dist');
const out = path.join(distDir, 'salone-ui.css');
const outMin = path.join(distDir, 'salone-ui.min.css');

const css = fs.readFileSync(src, 'utf8');

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(out, css);

// 1. remove comments
let out2 = css.replace(/\/\*[\s\S]*?\*\//g, '');

// 2. walk char-by-char, tracking whether we are inside url(...) or a string.
//    Inside url(): keep everything verbatim. Outside: collapse runs of
//    whitespace to a single space where the CSS parser needs one (between a
//    value and the next token), drop it otherwise, and strip around { }; : ,
const tokens = out2.replace(/\/\*/g, ''); // (safety no-op)
let i = 0, inUrl = false, inQuote = false, quote = '', result = '';
while (i < out2.length) {
  const c = out2[i];
  if (inUrl) {
    result += c;
    if (c === ')') inUrl = false;
    i++;
    continue;
  }
  if (inQuote) {
    result += c;
    if (c === quote) inQuote = false;
    i++;
    continue;
  }
  if (c === '"' || c === "'") { inQuote = true; quote = c; result += c; i++; continue; }
  if (out2.slice(i, i + 4) === 'url(') {
    inUrl = true;
    result += 'url(';
    i += 4;
    continue;
  }
  if (/\s/.test(c)) {
    // collapse: skip this run, but remember we saw a space
    let j = i;
    while (j < out2.length && /\s/.test(out2[j])) j++;
    const before = result[result.length - 1];
    const after = out2[j] || '';
    // keep a single space only if both sides are non-structural chars
    if (before && after && !/[{};:,()]/.test(before) && !/[{};:,]/.test(after)) {
      result += ' ';
    }
    i = j;
    continue;
  }
  result += c;
  i++;
}
const minified = result;

fs.writeFileSync(outMin, minified);

// Also sync to docs/dist if present for local docs / GitHub Pages preview
if (fs.existsSync(docsDistDir)) {
  fs.writeFileSync(path.join(docsDistDir, 'salone-ui.css'), css);
  fs.writeFileSync(path.join(docsDistDir, 'salone-ui.min.css'), minified);
}

console.log(`dist/salone-ui.css      ${css.length} bytes`);
console.log(`dist/salone-ui.min.css  ${minified.length} bytes`);
if (fs.existsSync(docsDistDir)) {
  console.log(`docs/dist/salone-ui.css ${css.length} bytes (synced)`);
}
