const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let totalFixes = 0;

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf8');
    const original = content;

    // 1. Convert all #about to about.html
    content = content.replace(/href="#about"/g, 'href="about.html"');
    
    // 2. Convert all #products to products.html
    content = content.replace(/href="#products"/g, 'href="products.html"');
    
    // 3. Convert all #services to services.html
    content = content.replace(/href="#services"/g, 'href="services.html"');

    // 4. Convert #industries to industries.html
    content = content.replace(/href="#industries"/g, 'href="industries.html"');

    // 5. Convert #contact to contact.html
    content = content.replace(/href="#contact"/g, 'href="contact.html"');
    
    // 6. Convert #careers to careers.html
    content = content.replace(/href="#careers"/g, 'href="careers.html"');
    
    // 7. Fix quote link to contact
    content = content.replace(/href="quote\.html"/g, 'href="contact.html"');

    // 8. Fix any Stitch SCREEN IDs safely
    const navRegex = /<nav[^>]*>([\s\S]*?)<\/nav>/ig;
    let navMatch;
    
    // General replacement just in case any weird ones are slipping
    // Home
    content = content.replace(/href="[^"]*SCREEN_28[^"]*"/g, 'href="index.html"');
    
    // About
    content = content.replace(/href="[^"]*SCREEN_15[^"]*"/g, 'href="about.html"');
    
    // Products
    content = content.replace(/href="[^"]*SCREEN_10[^"]*"/g, 'href="products.html"');
    
    // Services
    content = content.replace(/href="[^"]*SCREEN_29[^"]*"/g, 'href="services.html"');
    
    // Industries
    content = content.replace(/href="[^"]*SCREEN_17[^"]*"/g, 'href="industries.html"');
    
    // Blog
    content = content.replace(/href="[^"]*SCREEN_12[^"]*"/g, 'href="blog.html"');
    
    // Careers
    content = content.replace(/href="[^"]*SCREEN_13[^"]*"/g, 'href="careers.html"');
    
    // Contact
    content = content.replace(/href="[^"]*SCREEN_14[^"]*"/g, 'href="contact.html"');
    
    // Sub pages
    content = content.replace(/href="[^"]*SCREEN_22[^"]*"/g, 'href="career-detail.html"');
    content = content.replace(/href="[^"]*SCREEN_23[^"]*"/g, 'href="career-detail.html"');
    content = content.replace(/href="[^"]*SCREEN_24[^"]*"/g, 'href="career-detail.html"');
    

    if (content !== original) {
        fs.writeFileSync(path.join(dir, f), content);
        totalFixes++;
        console.log('FIXED: ' + f);
    }
});

console.log('\nDone! Fixed navigation links in ' + totalFixes + ' files.');
