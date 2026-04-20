const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// 1. Get the standard templates from index.html
const indexData = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Extract Header
const headerRegex = /(<!-- TopNavBar -->[\s\S]*?<\/header>)/i;
const headerMatch = indexData.match(headerRegex);

const mobileMenuRegex = /(<!-- Mobile Menu \(Slide-in\) -->[\s\S]*?<\/nav>\s*<\/div>)/i;
const mobileMenuMatch = indexData.match(mobileMenuRegex);

const standardHeader = headerMatch[1];
const standardMobileMenu = mobileMenuMatch[1];

let customHeader = standardHeader;
let customMobileMenu = standardMobileMenu;

// Remove active state from Home in Desktop Nav
customHeader = customHeader.replace('text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold', 'text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828]');
        
// Remove active state from Home in Mobile Nav
customMobileMenu = customMobileMenu.replace('text-lg font-semibold text-secondary" href="index.html"', 'text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary" href="index.html"');

const fullNewHeaderBlock = customHeader + '\n' + customMobileMenu;

let content = fs.readFileSync(path.join(dir, 'quote.html'), 'utf8');

// Regex modified to catch "sticky" instead of "fixed"
const existingNavRegex = /<(header|nav)[^>]*(fixed|sticky) top-0[^>]*>[\s\S]*?<\/\1>/i;

content = content.replace(existingNavRegex, fullNewHeaderBlock);

fs.writeFileSync(path.join(dir, 'quote.html'), content);
console.log('MADE quote.html RESPONSIVE');
