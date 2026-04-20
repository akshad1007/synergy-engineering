const fs = require('fs');
const path = require('path');

const root = process.cwd();
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.toLowerCase().endsWith('.html')) htmlFiles.push(full);
  }
}

walk(root);

const rel = (p) => path.relative(root, p).replace(/\\/g, '/');
const existing = new Set(htmlFiles.map(rel));

const summary = {
  files: htmlFiles.length,
  missingTitle: 0,
  missingMetaDescription: 0,
  missingH1: 0,
  multiH1: 0,
  imgWithoutAlt: 0,
  brokenInternalLinks: 0,
  emptyLinks: 0,
  targetBlankWithoutNoopener: 0,
  inlineStyles: 0,
  inlineScripts: 0,
  missingLang: 0,
  missingViewport: 0
};

const findings = [];

const pushFinding = (type, file, detail) => {
  findings.push({ type, file, detail });
};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const fileRel = rel(file);

  const hasViewport = /<meta\b[^>]*\bname\s*=\s*['"]viewport['"][^>]*>/i.test(content);
  const hasDescription = /<meta\b[^>]*\bname\s*=\s*['"]description['"][^>]*\bcontent\s*=\s*['"][^'"]+['"][^>]*>/i.test(content)
    || /<meta\b[^>]*\bcontent\s*=\s*['"][^'"]+['"][^>]*\bname\s*=\s*['"]description['"][^>]*>/i.test(content);

  if (!/<html\b[^>]*\blang\s*=\s*"[^"]+"/i.test(content)) {
    summary.missingLang++;
    pushFinding('missingLang', fileRel, 'Missing html[lang] attribute');
  }

  if (!hasViewport) {
    summary.missingViewport++;
    pushFinding('missingViewport', fileRel, 'Missing viewport meta tag');
  }

  if (!/<title>[^<]+<\/title>/i.test(content)) {
    summary.missingTitle++;
    pushFinding('missingTitle', fileRel, 'Missing or empty <title>');
  }

  if (!hasDescription) {
    summary.missingMetaDescription++;
    pushFinding('missingMetaDescription', fileRel, 'Missing or empty meta description');
  }

  const h1Count = (content.match(/<h1\b[^>]*>/gi) || []).length;
  if (h1Count === 0) {
    summary.missingH1++;
    pushFinding('missingH1', fileRel, 'No <h1> found');
  } else if (h1Count > 1) {
    summary.multiH1++;
    pushFinding('multiH1', fileRel, `Multiple <h1> found (${h1Count})`);
  }

  const imgTags = content.match(/<img\b[^>]*>/gi) || [];
  for (const img of imgTags) {
    if (!/\balt\s*=\s*"[^"]*"/i.test(img)) {
      summary.imgWithoutAlt++;
      pushFinding('imgWithoutAlt', fileRel, img.slice(0, 140));
    }
  }

  const anchorTags = [...content.matchAll(/<a\b[^>]*href\s*=\s*"([^"]*)"[^>]*>/gi)];
  for (const match of anchorTags) {
    const fullTag = match[0];
    const hrefRaw = match[1].trim();

    if (hrefRaw === '' || hrefRaw === '#' || /^javascript:/i.test(hrefRaw)) {
      summary.emptyLinks++;
      pushFinding('emptyLink', fileRel, hrefRaw || '(empty href)');
      continue;
    }

    const external = /^(https?:|mailto:|tel:|#)/i.test(hrefRaw);
    if (!external) {
      const clean = hrefRaw.split('#')[0].split('?')[0];
      if (clean) {
        const resolved = path.normalize(path.join(path.dirname(fileRel), clean)).replace(/\\/g, '/');
        if (!existing.has(resolved)) {
          summary.brokenInternalLinks++;
          pushFinding('brokenInternalLink', fileRel, `${hrefRaw} -> ${resolved}`);
        }
      }
    }

    if (/target\s*=\s*"_blank"/i.test(fullTag) && !/rel\s*=\s*"[^"]*noopener[^"]*"/i.test(fullTag)) {
      summary.targetBlankWithoutNoopener++;
      pushFinding('targetBlankWithoutNoopener', fileRel, fullTag.slice(0, 140));
    }
  }

  summary.inlineStyles += (content.match(/\sstyle\s*=\s*"[^"]*"/gi) || []).length;
  summary.inlineScripts += (content.match(/<script\b(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/gi) || []).length;
}

const byType = findings.reduce((acc, f) => {
  acc[f.type] = (acc[f.type] || 0) + 1;
  return acc;
}, {});

const payload = {
  generatedAt: new Date().toISOString(),
  root,
  summary,
  countsByType: byType,
  findingCount: findings.length,
  findings: findings.slice(0, 600)
};

console.log(JSON.stringify(payload, null, 2));
