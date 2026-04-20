const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Remove MTE from the Global Footer in every page
    content = content.replace(/<li><a class="text-slate-400 text-sm hover:text-secondary" href="products\.html\?brand=mte">MTE AG<\/a><\/li>\n?\s*/g, '');

    // Execute index.html specific modifications
    if (file === 'index.html') {
        // 2. Remove MTE from Ticker
        content = content.replace(/<span class="text-white font-headline font-bold tracking-widest text-lg md:text-xl opacity-80 uppercase">MTE AG<\/span>\n?\s*/g, '');
        
        // 3. Remove MTE from Grid
        const mteGridHtml = `<a class="flex justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" href="products.html?brand=mte">
<img alt="MTE logo" class="h-8 md:h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlxuJixUihw4jPGc3A1JmEMSKzBHx6qHlE8wo6tlcY5HcTkTuD3r0VeQdlTHJrbGLMGxCEpD7FlUcHUdPIZ_vkcxgcctScvacQLhdmH_p7tDIUaKmB1pPigkWYNKulBn77uOtmYZd7bDREPMFD-aM0BoN8nC00ssQQNIDh-DvinCiakyqsR_Ot16uMRzHb2ZDJqut83MEQ0fT7kvhT35-NNISK7ReGykWZmmNUzYtruqvTG-Oi6kLHIsYltLZaiamOS7QfzBH0Gu4"/>
</a>\n`;
        content = content.replace(mteGridHtml, '');
        
        // 4. Update Grid Layout from 4 cols down to 3
        content = content.replace('<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">', '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center">');
        
        // 5. Update partner logos scaling for Megger, EMH, Brother
        content = content.replace(/class="h-8 md:h-12 w-auto object-contain"/g, 'class="h-16 md:h-20 max-w-[200px] w-auto object-contain"');
    }

    fs.writeFileSync(path.join(dir, file), content);
});

console.log('Successfully removed MTE and updated partner logo grid layout across the site.');
