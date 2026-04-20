const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf8');
    let original = content;

    // Desktop Nav
    content = content.replace(/(href="industries\.html">Industries<\/a>)\s*\n\s*(<a.*?href="careers\.html">Careers<\/a>)/g, `$1\n<a class="text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828] transition-colors duration-200 text-sm" href="blog.html">Blog</a>\n$2`);

    // Mobile Nav
    // Note: The previous regex might capture both if we aren't careful, but let's be more specific.
    // Desktop class has text-sm, mobile class has text-lg.
    content = content.replace(/(<a class="text-lg font-medium[^"]*" href="industries\.html">Industries<\/a>)\s*\n\s*(<a class="text-lg font-medium[^"]*" href="careers\.html">Careers<\/a>)/g, `$1\n<a class="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary" href="blog.html">Blog</a>\n$2`);

    // Footer
    content = content.replace(/(<li><a [^>]*href="industries\.html">Industries<\/a><\/li>)\s*\n\s*<li><\/li>\s*\n\s*(<li><a [^>]*href="careers\.html">Careers<\/a><\/li>)/g, `$1\n<li><a class="text-slate-400 hover:text-secondary text-sm transition-all" href="blog.html">Blog</a></li>\n$3`);

    // In case the empty <li></li> was removed in some files
    content = content.replace(/(<li><a [^>]*href="industries\.html">Industries<\/a><\/li>)\s*\n\s*(<li><a [^>]*href="careers\.html">Careers<\/a><\/li>)/g, `$1\n<li><a class="text-slate-400 hover:text-secondary text-sm transition-all" href="blog.html">Blog</a></li>\n$2`);

    if (content !== original) {
        fs.writeFileSync(path.join(dir, f), content);
        updatedCount++;
        console.log(`Updated blog nav in ${f}`);
    }
});

console.log(`Updated ${updatedCount} files.`);
