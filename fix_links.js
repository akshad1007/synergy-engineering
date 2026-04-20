const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let totalFixes = 0;

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf8');
    const original = content;

    // Fix blog post links to existing page
    content = content.replace(/href="blog-post-1\.html"/g, 'href="blog-post.html"');
    content = content.replace(/href="blog-post-2\.html"/g, 'href="blog-post.html"');
    content = content.replace(/href="blog-post-3\.html"/g, 'href="blog-post.html"');

    // Fix quote link to contact
    content = content.replace(/href="quote\.html"/g, 'href="contact.html"');

    // Fix index.html#home to index.html
    content = content.replace(/href="index\.html#home"/g, 'href="index.html"');

    // Fix services sub-page links
    content = content.replace(/href="services\/[^"]*\.html"/g, 'href="services.html"');

    // Fix industries sub-page links  
    content = content.replace(/href="industries\/[^"]*\.html"/g, 'href="industries.html"');

    if (content !== original) {
        fs.writeFileSync(path.join(dir, f), content);
        totalFixes++;
        console.log('FIXED: ' + f);
    } else {
        console.log('OK:    ' + f + ' (no changes needed)');
    }
});

console.log('\nDone! Fixed ' + totalFixes + ' files out of ' + files.length);
