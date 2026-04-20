const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'products'),
    path.join(__dirname, 'pages')
];

let filesProcessed = 0;

targetDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        // This is primarily for the product detail pages (which exist in products/ and pages/)
        if (content.includes('Related Testing Instruments')) {
            // Fix "View All Products" button
            // From: <button class="hidden md:flex items-center gap-2 text-primary-container font-bold hover:text-secondary transition-colors group"> View All Products ... </button>
            // To: <a href="../pages/products.html" class="hidden md:flex items-center gap-2 text-primary-container font-bold hover:text-secondary transition-colors group"> View All Products ... </a>
            
            // Note: in pages/ it should be href="products.html", in products/ it should be href="../pages/products.html"
            const productsLink = dir.includes('products') ? '../pages/products.html' : 'products.html';
            
            content = content.replace(/<button( class="hidden md:flex[^>]+)>(.*?)View All Products(.*?)<\/button>/s, `<a href="${productsLink}"$1>$2View All Products$3</a>`);
            
            // Fix "LEARN MORE" buttons on the 3 related products
            // They are currently:
            // <div class="pt-4 flex justify-between items-center">
            // <span class="text-secondary font-bold text-sm">LEARN MORE</span>
            // <span class="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" data-icon="arrow_outward">arrow_outward</span>
            // </div>
            
            // Replace the wrapper <div> with an <a> for the whole element, or just change the span
            // The easiest is to change the wrapping <div class="pt-4 flex justify-between items-center"> to <a href="..." ...>
            // We'll point them to the products page for now to be functional.
            
            const learnMoreRegex = /<div class="pt-4 flex justify-between items-center">\s*<span class="text-secondary font-bold text-sm">LEARN MORE<\/span>\s*<span[^>]+>arrow_outward<\/span>\s*<\/div>/g;
            
            content = content.replace(learnMoreRegex, `<a href="${productsLink}" class="pt-4 flex justify-between items-center hover:opacity-80 transition-opacity">
<span class="text-secondary font-bold text-sm">LEARN MORE</span>
<span class="material-symbols-outlined text-outline group-hover:text-secondary transition-colors" data-icon="arrow_outward">arrow_outward</span>
</a>`);

            if (content !== original) {
                fs.writeFileSync(filePath, content);
                filesProcessed++;
                console.log(`Updated related items functionality in ${filePath}`);
            }
        }
    });
});

console.log(`Successfully updated ${filesProcessed} files.`);
