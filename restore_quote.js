const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf8');
    let original = content;

    // Restore quote.html where it makes sense: buttons that say Request Quote, Get a Quote, etc.
    content = content.replace(/(href="contact\.html"[^>]*>\s*(Get a Quote|Request a Quote|Request Quote)\s*<\/a>)/gi, (match) => {
        return match.replace('contact.html', 'quote.html');
    });

    if (content !== original) {
        fs.writeFileSync(path.join(dir, f), content);
        console.log(`Restored quote link in ${f}`);
    }
});
