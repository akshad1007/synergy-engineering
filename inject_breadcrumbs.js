const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const formatName = (file) => {
    switch(file) {
        case 'about.html': return 'About Us';
        case 'products.html': return 'Products';
        case 'product-detail.html': return 'Product Details';
        case 'services.html': return 'Services';
        case 'industries.html': return 'Industries';
        case 'careers.html': return 'Careers';
        case 'career-detail.html': return 'Career Detail';
        case 'contact.html': return 'Contact Us';
        case 'blog.html': return 'Blog';
        case 'blog-post.html': return 'Blog Post';
        case 'blog-post-detail.html': return 'Blog Details';
        case 'quote.html': return 'Get a Quote';
        default: return file.replace('.html', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
}

let count = 0;

files.forEach(file => {
    if (file === 'index.html' || file === 'about.html') return; 

    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Check if breadcrumb is already there by checking the exact separator span
    if (!content.includes('<span class="mx-2 text-secondary">&gt;</span>')) {
        const pageName = formatName(file);
        
        // Find if the text is centered near the h1
        const maxSearch = content.indexOf('<h1');
        const textCenterIdx = content.lastIndexOf('text-center', maxSearch);
        // If text-center is within 100 characters of the <h1>, it's centered
        const isCentered = textCenterIdx !== -1 && (maxSearch - textCenterIdx) < 150;
        
        const justifyClass = isCentered ? 'justify-center ' : '';
        
        const breadcrumbNav = `<nav class="flex ${justifyClass}mb-6 text-sm font-medium tracking-wide text-slate-300">
<a class="hover:text-white cursor-pointer" href="index.html">Home</a>
<span class="mx-2 text-secondary">&gt;</span>
<span class="text-white">${pageName}</span>
</nav>\n`;

        content = content.replace(/(<h1[^>]*>)/i, breadcrumbNav + "$1");
        fs.writeFileSync(path.join(dir, file), content);
        count++;
    }
});

console.log(`Successfully injected breadcrumb navigation across ${count} inner pages!`);
