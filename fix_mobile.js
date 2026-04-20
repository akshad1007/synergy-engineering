const fs = require('fs');
const path = require('path');

const root = process.cwd();
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if(entry.isDirectory()) walk(full);
    else if(entry.isFile() && full.toLowerCase().endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);

let fixedGridFiles = 0;

for (const file of htmlFiles) {
    let c = fs.readFileSync(file, 'utf8');
    let original = c;

    // Fix body overflow
    if (!/<body[^>]*overflow-x-hidden/i.test(c)) {
        if (/class="/.test(c.match(/<body[^>]*>/i)?.[0] || '')) {
            c = c.replace(/(<body\b[^>]*class=")([^"]*)(")/i, ' overflow-x-hidden');
        } else {
            c = c.replace(/(<body\b[^>]*)>/i, ' class="overflow-x-hidden">');
        }
    }

    if (file.indexOf('quote-print') === -1) {
        c = c.replace(/class="([^"]*)\b(grid-cols-[2-9]|grid-[0-9a-zA-Z]+-cols-[0-9]+)\b([^"]*)"/g, (match, before, cols, after) => {
            if (/(sm:|md:|lg:|xl:)\bgrid-cols/.test(before + after)) {
                return match; // already has some responsive handling
            }
            if (/\b(?:[a-z]+:)?grid-cols-1\b/.test(before + after)) {
                return match; 
            }
            return 'class="' + before + 'grid-cols-1 md:' + cols + after + '"';
        });

        // 2) Ticker-scroll has animation issues on tiny screens (causing side-scroll)
        // ensure container has overflow-hidden
        c = c.replace(/class="([^"]*ticker-scroll[^"]*)"/g, (match, classes) => {
            if (!/overflow-/.test(classes)) {
                return 'class="' + classes + ' overflow-hidden"';
            }
            return match;
        });
    }

    if (c !== original) {
        fs.writeFileSync(file, c, 'utf8');
        fixedGridFiles++;
    }
}
console.log('Fixed mobile layout constraints in ' + fixedGridFiles + ' files.');
