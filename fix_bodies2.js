const fs = require('fs'); const path = require('path');
const root = process.cwd();
const htmlFiles = [];
function walk(dir) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const f = path.join(dir, e.name); if(e.isDirectory()) walk(f); else if(e.isFile() && f.toLowerCase().endsWith('.html')) htmlFiles.push(f); } }
walk(root);

let fixed = 0;
for (const file of htmlFiles) {
    let c = fs.readFileSync(file, 'utf8');
    const orig = c;
    
    // Add overflow-x-hidden explicitly to body
    c = c.replace(/(<body\b[^>]*)class="([^"]*)"/i, (m, p1, p2) => {
        let classes = p2.split(/\s+/).filter(Boolean);
        if (!classes.includes('overflow-x-hidden')) classes.push('overflow-x-hidden');
        if (!classes.includes('w-full')) classes.push('w-full');
        return p1 + 'class="' + classes.join(' ') + '"';
    });

    if (c !== orig) {
        fs.writeFileSync(file, c, 'utf8');
        fixed++;
    }
}
console.log('Bodies successfully fixed in ' + fixed + ' files.');
