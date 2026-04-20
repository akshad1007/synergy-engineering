const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// 1. Get the standard templates from index.html
const indexData = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Extract Header
const headerRegex = /(<!-- TopNavBar -->[\s\S]*?<\/header>)/i;
const headerMatch = indexData.match(headerRegex);

// Extract Mobile Menu
const mobileMenuRegex = /(<!-- Mobile Menu \(Slide-in\) -->[\s\S]*?<\/nav>\s*<\/div>)/i;
const mobileMenuMatch = indexData.match(mobileMenuRegex);

// Extract Menu Script
const scriptRegex = /(<script>\s*const menuToggle = document\.getElementById\('menu-toggle'\);[\s\S]*?<\/script>)/i;
const scriptMatch = indexData.match(scriptRegex);

if (!headerMatch || !mobileMenuMatch || !scriptMatch) {
    console.error("Could not find required responsive blocks in index.html");
    process.exit(1);
}

const standardHeader = headerMatch[1];
const standardMobileMenu = mobileMenuMatch[1];
const standardScript = scriptMatch[1];

let fixes = 0;

files.forEach(file => {
    if (file === 'index.html') return; // skip index
    
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    const original = content;

    // Detect the existing navigation block
    const existingNavRegex = /<(header|nav)[^>]*fixed top-0 left-0 w-full z-50[^>]*>[\s\S]*?<\/\1>/i;

    if (existingNavRegex.test(content)) {
        
        let customHeader = standardHeader;
        let customMobileMenu = standardMobileMenu;
        
        // Remove active state from Home in Desktop Nav
        customHeader = customHeader.replace('text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold', 'text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828]');
        
        // Remove active state from Home in Mobile Nav
        customMobileMenu = customMobileMenu.replace('text-lg font-semibold text-secondary" href="index.html"', 'text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary" href="index.html"');

        // Add active state to current page
        const namePart = file.replace('.html', '');
        let targetRegex;
        let mobileTargetRegex;
        
        if (namePart === 'about') {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="about\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="about\.html")/i;
        } else if (namePart === 'products') {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="products\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="products\.html")/i;
        } else if (namePart === 'services') {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="services\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="services\.html")/i;
        } else if (namePart === 'industries') {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="industries\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="industries\.html")/i;
        } else if (namePart === 'blog' || namePart.startsWith('blog-')) {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="blog\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="blog\.html")/i;
        } else if (namePart === 'careers' || namePart.startsWith('career-')) {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="careers\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="careers\.html")/i;
        } else if (namePart === 'contact') {
            targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="contact\.html")/i;
            mobileTargetRegex = /text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary(" href="contact\.html")/i;
        }

        if (targetRegex) {
            customHeader = customHeader.replace(targetRegex, 'text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold$1');
        }
        if (mobileTargetRegex) {
            customMobileMenu = customMobileMenu.replace(mobileTargetRegex, 'text-lg font-semibold text-secondary$1');
        }

        // STEP 1: Replace old header with combined new header + custom mobile menu
        const fullNewHeaderBlock = customHeader + '\n' + customMobileMenu;
        content = content.replace(existingNavRegex, fullNewHeaderBlock);
        
        // Clean up redundant TopNavBar comments
        content = content.replace(/<!-- TopNavBar -->\n*/gi, '');
        content = content.replace(/(<!-- Top Navigation Bar -->\n*)/gi, '');
        content = content.replace(/<header class="fixed/, '<!-- TopNavBar -->\n<header class="fixed');

        // STEP 2: Process Script block insertion at bottom
        // Remove trailing script if it already exists to avoid duplication
        const existingScriptRegex = /<script>\s*const menuToggle[\s\S]*?<\/script>/gi;
        content = content.replace(existingScriptRegex, '');
        
        // Insert standard script right before closing body
        content = content.replace(/<\/body>/i, `\n${standardScript}\n</body>`);

        if (content !== original) {
            fs.writeFileSync(path.join(dir, file), content);
            fixes++;
            console.log('MADE RESPONSIVE: ' + file);
        }
    } else {
        console.log('WARNING: Could not find header block in ' + file);
    }
});

console.log(`\nSuccessfully injected mobile responsive headers into ${fixes} pages using index.html as template.`);
