import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const root = resolve('dist');
const base = '/cmgg';
const htmlFiles = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) htmlFiles.push(path);
  }
}

function resolveTarget(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return null;
  const withoutBase = clean.startsWith(base) ? clean.slice(base.length) || '/' : clean;
  const path = withoutBase.startsWith('/') ? withoutBase.slice(1) : withoutBase;
  const direct = resolve(root, path);
  const candidates = [direct, join(direct, 'index.html')];
  if (!direct.endsWith('.html')) candidates.push(`${direct}.html`);
  return candidates.find(existsSync) ?? null;
}

if (!existsSync(root)) throw new Error('dist/ does not exist. Run npm run build first.');
walk(root);

const errors = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const href of links) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(href)) continue;
    const absolute = href.startsWith('/')
      ? href
      : `/${relative(root, dirname(file)).replaceAll('\\', '/')}/${href}`;
    if (!resolveTarget(absolute.replace(/\/[^/]+\.html\//, '/'))) {
      errors.push(`${relative(root, file)} → ${href}`);
    }
  }
}

if (errors.length) {
  console.error(`Broken internal references:\n${errors.join('\n')}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: all internal links and assets resolve.`);
