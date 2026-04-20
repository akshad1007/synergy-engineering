const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// 1. Get the standard template from index.html
const indexData = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const headerMatch = indexData.match(/(<header class="fixed top-0 left-0 w-full z-50[\s\S]*?<\/header>)/i);

if (!headerMatch) {
    console.error("Could not find standard header in index.html");
    process.exit(1);
}

const standardHeader = headerMatch[1];

let fixes = 0;

files.forEach(file => {
    if (file === 'index.html') return; // skip index since it's the source
    
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    const original = content;

    // Detect the existing navigation block
    // It's usually a <nav class="fixed top-0... or <header class="fixed top-0...
    const existingNavRegex = /<(nav|header)[^>]*fixed top-0 left-0 w-full z-50[^>]*>[\s\S]*?<\/\1>/i;
    
    if (existingNavRegex.test(content)) {
        // We know what page we are on based on the filename
        let customHeader = standardHeader;
        
        // Remove active state from Home
        customHeader = customHeader.replace('text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold', 'text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828]');
        
        // Add active state to current page
        const namePart = file.replace('.html', '');
        let targetRegex;
        
        if (namePart === 'about') targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="about\.html")/i;
        else if (namePart === 'products') targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="products\.html")/i;
        else if (namePart === 'services') targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="services\.html")/i;
        else if (namePart === 'industries') targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="industries\.html")/i;
        else if (namePart === 'blog' || namePart.startsWith('blog-')) targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="blog\.html")/i;
        else if (namePart === 'careers' || namePart.startsWith('career-')) targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="careers\.html")/i;
        else if (namePart === 'contact') targetRegex = /text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\]( transition-colors duration-200 text-sm" href="contact\.html")/i;
        else targetRegex = null;

        if (targetRegex) {
            customHeader = customHeader.replace(targetRegex, 'text-[#D62828] border-b-2 border-[#D62828] pb-1 font-semibold$1');
        }

        // Replace old nav with new custom header
        content = content.replace(existingNavRegex, customHeader);

        // Also clean up that commented <!-- TopNavBar --> if it got duplicated or left behind
        content = content.replace(/<!-- Top Navigation Bar -->\n*/gi, '');
        content = content.replace(/(<!-- TopNavBar -->\n*){2,}/gi, '<!-- TopNavBar -->\n');
        
        if (content !== original) {
            fs.writeFileSync(path.join(dir, file), content);
            fixes++;
            console.log('UNIFIED: ' + file);
        }
    } else {
        console.log('WARNING: Could not find nav block in ' + file);
    }
});

console.log(`\nSuccessfully unified navigation across ${fixes} pages using index.html as the template.`);
