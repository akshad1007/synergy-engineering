const fs = require('fs');
['pages/quote.html'].forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/\/ name="equipment\[\]">/g, ' name="equipment[]">');
    fs.writeFileSync(f, content, 'utf8');
});
