const fs = require('fs');
const path = require('path');

const dir = 'pages';

// Fetch the standard layout components from index.html
const indexData = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

const headerRegex = /(<!-- TopNavBar -->[\s\S]*?<\/header>)/i;
const standardHeader = indexData.match(headerRegex)[1];

const mobileRegex = /(<!-- Mobile Menu \(Slide-in\) -->[\s\S]*?<\/nav>\s*<\/div>)/ig;
const mobileMatches = indexData.match(mobileRegex);
const standardMobile = mobileMatches[0];

const footerRegex = /(<!-- Footer -->[\s\S]*?<\/footer>)/i;
const standardFooter = indexData.match(footerRegex)[1];

const whatsappRegex = /(<!-- Floating WhatsApp Button -->[\s\S]*?<\/a>)/i;
const standardWhatsapp = indexData.match(whatsappRegex)[1];

const scriptRegex = /(<script>[\s\S]*?<\/script>\s*<\/body>)/i;
const standardScript = indexData.match(scriptRegex)[1];

// Strip active state from Home in Desktop Nav
let customHeader = standardHeader.replace('text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold', 'text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828]');

let quoteData = fs.readFileSync(path.join(dir, 'quote.html'), 'utf8');

// Replace Header - looks for sticky or fixed nav
quoteData = quoteData.replace(/<header[^>]*>[\s\S]*?<\/nav>\n<\/header>/i, customHeader + '\n' + standardMobile);

// Replace Footer - finds footer and anything after it until body tag
quoteData = quoteData.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, standardFooter + '\n' + standardWhatsapp);

// Fix trailing body scripts (ensure menu toggle logic works)
quoteData = quoteData.replace(/<\/body>/i, standardScript);

fs.writeFileSync(path.join(dir, 'quote.html'), quoteData);
console.log('Successfully structured quote.html!');
