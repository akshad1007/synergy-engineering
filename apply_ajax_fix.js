const fs = require('fs');
let c = fs.readFileSync('pages/contact.html', 'utf8');

c = c.replace(/<div class="text-green-600 font-bold p-4 bg-green-50 rounded-lg hidden" data-fs-success>[\s\S]*?<form id="contact-form" class="space-y-6">/, '<div class="text-green-600 font-bold p-4 bg-green-50 rounded-lg hidden" data-fs-success>Thank you! Your contact request has been sent successfully.</div>\n<div class="text-red-600 font-bold p-4 bg-red-50 rounded-lg hidden" data-fs-error>Oops! There was a problem submitting your form. Please try again.</div>\n<form id="contact-form" class="space-y-6">');

// also fix the button
c = c.replace(/data-fs-submit-btn\s*>([^<]*)SEND MESSAGE/, 'data-fs-submit-btn type="submit"> MESSAGE');

fs.writeFileSync('pages/contact.html', c);
