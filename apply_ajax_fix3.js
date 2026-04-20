const fs = require('fs');
let c = fs.readFileSync('pages/contact.html', 'utf8');

c = c.replace(/min-h-\[48px\]"\w*\s*data-fs-submit-btn\s*SEND MESSAGE/, 'min-h-[48px]" data-fs-submit-btn type="submit">SEND MESSAGE');

fs.writeFileSync('pages/contact.html', c);
