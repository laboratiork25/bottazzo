#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const PLUGINS_DIR = path.join(ROOT, 'plugins');

const IMPORT_LINE = "import '../lib/language.js'";

function isJavaScriptFile(filePath) {
  return filePath.endsWith('.js');
}

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.isFile() && isJavaScriptFile(full)) out.push(full);
  }
  return out;
}

function ensureImport(content) {
  if (content.includes(IMPORT_LINE)) return { content, changed: false };
  // Insert after the last import, otherwise at the top
  const lines = content.split(/\r?\n/);
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*import\s+/.test(lines[i])) lastImportIdx = i;
  }
  const insertAt = lastImportIdx >= 0 ? lastImportIdx + 1 : 0;
  lines.splice(insertAt, 0, IMPORT_LINE + ';');
  return { content: lines.join('\n'), changed: true };
}

function extractStringsReport(content) {
  // Very naive scan: look for conn.reply( ... , "..." ) and sendMessage with { text: "..." } or { caption: "..." }
  const report = [];
  const replyRegex = /conn\.reply\s*\(\s*[^,]+,\s*([`"'])([\s\S]*?)\1/gm;
  const textRegex = /\{[^\}]*\btext\s*:\s*([`"'])([\s\S]*?)\1[^\}]*\}/gm;
  const captionRegex = /\{[^\}]*\bcaption\s*:\s*([`"'])([\s\S]*?)\1[^\}]*\}/gm;

  const addMatches = (regex, kind) => {
    regex.lastIndex = 0;
    let m;
    while ((m = regex.exec(content))) {
      const str = m[2];
      // Skip template literals with placeholders to reduce noise
      if (/\$\{/.test(str)) continue;
      // Skip very short strings
      if (str.trim().length < 2) continue;
      report.push({ kind, sample: str.slice(0, 140) });
    }
  };

  addMatches(replyRegex, 'reply');
  addMatches(textRegex, 'text');
  addMatches(captionRegex, 'caption');

  return report;
}

function main() {
  if (!fs.existsSync(PLUGINS_DIR)) {
    console.error('Plugins directory not found:', PLUGINS_DIR);
    process.exit(1);
  }
  const files = walk(PLUGINS_DIR);
  const summary = [];
  let changedCount = 0;

  for (const file of files) {
    try {
      const original = fs.readFileSync(file, 'utf8');
      const { content, changed } = ensureImport(original);
      if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
      }
      const strings = extractStringsReport(content);
      if (strings.length) {
        summary.push({ file, strings });
      }
    } catch (e) {
      console.error('Error processing', file, e.message);
    }
  }

  // Write report
  const reportPath = path.join(ROOT, 'localization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), changedImports: changedCount, files: summary }, null, 2));
  console.log('Localization report written to', reportPath);
  console.log('Imports added/ensured in', changedCount, 'files.');
}

main();
