const fs = require('fs'); const path = require('path');
const root = process.cwd();
const htmlFiles = [];
function walk(dir) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const f = path.join(dir, e.name); if(e.isDirectory()) walk(f); else if(e.isFile() && f.toLowerCase().endsWith('.html')) htmlFiles.push(f); } }
walk(root);

let fixed = 0;
for (const file of htmlFiles) {
    let c = fs.readFileSync(file, 'utf8');
    const orig = c;
    
    c = c.replace(/<body\b([^>]*)class="([^"]*)"([^>]*)>/i, (match, prefix, classNames, suffix) => {
        const classes = [...new Set([...classNames.split(/\s+/), 'overflow-x-hidden', 'w-full'])].join(' ');
        return <bodyclass="">;
    });

    if (c === orig) {
        c = c.replace(/<body([^>]*)>/i, '<body class="overflow-x-hidden w-full">');
    }
    
    // Also remove w-screen from quote-print or anywhere since it breaks mobile width exactly
    c = c.replace(/\bw-screen\b/g, 'w-full');

    if (c !== orig) {
        fs.writeFileSync(file, c, 'utf8');
        fixed++;
    }
}
console.log('Final body swap in ' + fixed + ' files');
