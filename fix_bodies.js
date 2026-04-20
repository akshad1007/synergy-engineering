const fs = require('fs'); const path = require('path');
const root = process.cwd();
const htmlFiles = [];
function walk(dir) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const f = path.join(dir, e.name); if(e.isDirectory()) walk(f); else if(e.isFile() && f.toLowerCase().endsWith('.html')) htmlFiles.push(f); } }
walk(root);

let fixed = 0;
for (const file of htmlFiles) {
    let c = fs.readFileSync(file, 'utf8');
    const orig = c;
    
    let hasClassMatch = false;
    c = c.replace(/<body([^>]*)class="([^"]*)"([^>]*)>/i, (m, p1, p2, p3) => {
        hasClassMatch = true;
        const existing = new Set(p2.split(/ |\t/).filter(Boolean));
        existing.add('overflow-x-hidden');
        existing.add('w-full');
        // also get rid of w-screen here if somehow in body
        existing.delete('w-screen');
        return '<body' + p1 + 'class="' + Array.from(existing).join(' ') + '"' + p3 + '>';
    });

    if (!hasClassMatch) {
       c = c.replace(/<body(.*?)>/i, '<body class="overflow-x-hidden w-full">');
    }
    
    // anywhere else w-screen is bad
    c = c.replace(/\bw-screen\b/g, 'w-full');

    if (c !== orig) {
        fs.writeFileSync(file, c, 'utf8');
        fixed++;
    }
}
console.log('Fixed bodies in ' + fixed + ' files.');
