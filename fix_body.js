const fs = require('fs'); const path = require('path');
const root = process.cwd();
const htmlFiles = [];
function walk(dir) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const f = path.join(dir, e.name); if(e.isDirectory()) walk(f); else if(e.isFile() && f.endsWith('.html')) htmlFiles.push(f); } }
walk(root);

let fixed = 0;
for (const file of htmlFiles) {
    let c = fs.readFileSync(file, 'utf8');
    const orig = c;
    
    // Add overflow-x-hidden explicitly to body
    if (!/<body[^>]*overflow-x-hidden/i.test(c)) {
        c = c.replace(/(<body\b[^>]*class=")([^"]*)(")/i, ' overflow-x-hidden w-full');
        if (c === orig) {
            c = c.replace(/<body(.*?)>/i, '<body class="overflow-x-hidden w-full" >');
        }
    }
    
    // Ensure max-w full on cards or containers that might burst bounds
    c = c.replace(/class="([^"]*\bmax-w-[4-9]xl\b[^"]*)"/gi, (match, cl) => {
        if (!/max-w-full/.test(cl) && !/w-full/.test(cl)) {
            return 'class="' + cl + ' w-full"'; // Add w-full underneath 
        }
        return match;
    });

    if (c !== orig) {
        fs.writeFileSync(file, c, 'utf8');
        fixed++;
    }
}
console.log('Applied body wrapper fixes to ' + fixed + ' files.');
