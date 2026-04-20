const fs = require('fs');
let c = fs.readFileSync('pages/contact.html', 'utf8');

c = c.replace(/<form[^>]+class="space-y-6"[^>]*>/, '<div class="text-green-600 font-bold p-4 bg-green-50 rounded-lg hidden" data-fs-success>Thank you! Your contact request has been sent successfully.</div>\n<div class="text-red-600 font-bold p-4 bg-red-50 rounded-lg hidden" data-fs-error>Oops! There was a problem submitting your form. Please try again.</div>\n<form id="contact-form" class="space-y-6">');

c = c.replace(/(type="submit"[^>]*>)/, 'data-fs-submit-btn ');

if (!c.includes('unpkg.com/@formspree/ajax')) {
    c = c.replace('</body>', "\n<script>\n  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };\n  formspree('initForm', { formElement: '#contact-form', formId: 'xrbnllrb' });\n</script>\n<script src='https://unpkg.com/@formspree/ajax@1' defer></script>\n</body>");
}

fs.writeFileSync('pages/contact.html', c);
console.log('Done');
