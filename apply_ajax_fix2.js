const fs = require('fs');
let c = fs.readFileSync('pages/contact.html', 'utf8');

c = c.replace(/data-fs-submit-btn\s*SEND MESSAGE/, 'data-fs-submit-btn type="submit">SEND MESSAGE');

fs.writeFileSync('pages/contact.html', c);
