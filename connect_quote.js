const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let fixes = 0;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    const original = content;

    // 1. Convert all contact.html#quote to quote.html
    content = content.replace(/href="contact\.html#quote"/g, 'href="quote.html"');
    
    // 2. Convert all #quote to quote.html
    content = content.replace(/href="#quote"/g, 'href="quote.html"');
    
    // 3. For buttons that might have href="contact" but button text is "Get Quote"
    content = content.replace(/(<a[^>]*href=")contact\.html("[^>]*>\s*Get a Quote\s*<\/a>)/ig, '$1quote.html$2');
    content = content.replace(/(<a[^>]*href=")contact\.html("[^>]*>\s*Request Quote\s*<\/a>)/ig, '$1quote.html$2');

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        fixes++;
        console.log('CONNECTED QUOTE IN: ' + file);
    }
});

console.log('Done connecting quote page across ' + fixes + ' pages.');
