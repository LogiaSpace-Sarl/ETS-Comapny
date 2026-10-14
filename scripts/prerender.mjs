// Writes one static HTML file per route so search engines and link previews
// get the real content and per-page metadata without running JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrEntry = path.resolve('dist-ssr/entry-server.js');
const { render, content, routes, pageTitle, canonicalUrl } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const escape = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function replaceOrFail(html, pattern, replacement) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`Pattern not found in index.html: ${pattern}`);
  // A function replacement keeps "$" sequences in the rendered HTML literal.
  return html.replace(pattern, () => replacement);
}

function buildPage(url, meta, { notFound = false } = {}) {
  const title = escape(pageTitle(url, meta));
  const description = escape(meta.description);
  let html = template;
  html = replaceOrFail(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceOrFail(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = replaceOrFail(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceOrFail(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  if (notFound) {
    html = replaceOrFail(html, /\s*<link rel="canonical" href="[^"]*" \/>/, '\n    <meta name="robots" content="noindex" />');
    html = replaceOrFail(html, /\s*<meta property="og:url" content="[^"]*" \/>/, '');
  } else {
    html = replaceOrFail(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl(url)}" />`);
    html = replaceOrFail(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl(url)}" />`);
  }
  // Framer Motion renders entrance animations in their hidden state; show them when JavaScript is off.
  html = replaceOrFail(html, '</head>', '  <noscript><style>#root [style*="opacity:0"]{opacity:1!important;transform:none!important}</style></noscript>\n  </head>');
  return replaceOrFail(html, '<div id="root"></div>', `<div id="root">${render(url)}</div>`);
}

const meta = content.fr.meta;
for (const url of routes) {
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), buildPage(url, meta[url]));
  console.log(`prerendered ${url} -> ${file}`);
}
fs.writeFileSync(path.join(dist, '404.html'), buildPage('/404', meta.notFound, { notFound: true }));
console.log('prerendered 404 -> 404.html');

fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });
