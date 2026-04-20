const fs = require('fs');
let c = fs.readFileSync('pages/contact.html', 'utf8');

// Replace form tag
c = c.replace(/<form[^>]+class="space-y-6"[^>]*>/, '<div class="text-green-600 font-bold p-4 bg-green-50 rounded-lg hidden" data-fs-success>Thank you! Your contact request has been sent successfully.</div>\n<div class="text-red-600 font-bold p-4 bg-red-50 rounded-lg hidden" data-fs-error>Oops! There was a problem submitting your form. Please try again.</div>\n<form id="contact-form" class="space-y-6">');

// Add error spans and data-fs-field attributes to inputs
c = c.replace(/id="([^"]+)"\s*name="([^"]+)"([^>]*type="(?:text|email|tel)"[^>]*)/g, 'id="" name="" data-fs-field ');
c = c.replace(/id="message"([^>]*textarea>)/g, 'id="message" data-fs-field ');
c = c.replace(/id="reason"([^>]*select>)/g, 'id="reason" data-fs-field ');

// Add submit button attribute
c = c.replace(/class="([^"]*)\s*type="submit"/, 'class=" data-fs-submit-btn type="submit"');

if (!c.includes('unpkg.com/@formspree/ajax')) {
    c = c.replace('</body>', 
<script>
  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
  formspree('initForm', { formElement: '#contact-form', formId: 'xrbnllrb' });
</script>
<script src="https://unpkg.com/@formspree/ajax@1" defer></script>
</body>);
}

fs.writeFileSync('pages/contact.html', c);
console.log('Vanilla JS AJAX applied to Contact form');
