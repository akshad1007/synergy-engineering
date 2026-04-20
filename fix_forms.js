const fs = require('fs');
const path = require('path');
const htmlFiles = [];
function walk(dir) { for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const f = path.join(dir, e.name); if(e.isDirectory()) walk(f); else if(e.isFile() && f.endsWith('.html')) htmlFiles.push(f); } }
walk(process.cwd());

let fixed = 0;
for (const file of htmlFiles) {
    let c = fs.readFileSync(file, 'utf8');
    const orig = c;
    
    // Fix Contact form
    if (file.includes('contact.html')) {
        c = c.replace(/<form action="#" class="space-y-6" method="POST">/g, '<form action="https://formspree.io/f/xbjnqwoq" class="space-y-6" method="POST">');
    }
    
    // Fix Career Application form
    if (file.includes('career-detail.html')) {
        c = c.replace(/<form action="#" class="space-y-6">/g, '<form action="https://formspree.io/f/xbjnqwoq" class="space-y-6" method="POST" enctype="multipart/form-data">');
    }
    
    // Fix Newsletter Subscribe forms (in blog)
    if (file.includes('blog.html') || file.includes('blog-post')) {
        c = c.replace(/<form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">/g, '<form action="https://formspree.io/f/xbjnqwoq" method="POST" class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">');
    }
    
    // Fix Quote Form (needs method added since it's missing)
    if (file.includes('quote.html')) {
        c = c.replace(/<form id="quote-form-v2" class="space-y-12">/g, '<form id="quote-form-v2" action="https://formspree.io/f/xbjnqwoq" method="POST" class="space-y-12">');
    }

    if (c !== orig) {
        fs.writeFileSync(file, c, 'utf8');
        fixed++;
    }
}
console.log('Wired up serverless forms on ' + fixed + ' pages.');
