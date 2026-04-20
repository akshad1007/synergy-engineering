const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf8');
    let original = content;

    // The mobile menu has the wrong class on the Blog link. Note it could be inside 'flex flex-col p-6 space-y-4 overflow-y-auto'
    // Specifically, let's look for <a href="industries.html">Industries</a> followed by the wrong blog link.
    const wrongBlogLink = '<a class="text-slate-700 dark:text-slate-300 font-medium hover:text-[#D62828] transition-colors duration-200 text-sm" href="blog.html">Blog</a>';
    const correctBlogLink = '<a class="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary" href="blog.html">Blog</a>';
    
    // We already know the first one in the file is desktop, the 2nd and 3rd ones are mobile.
    // Instead of regex, if we find wrongBlogLink, the first occurrence is desktop, which is CORRECT.
    // The subsequent occurrences of wrongBlogLink should be replaced with correctBlogLink for mobile.
    // Actually, `blog.html` has home page active. Wait, `unify_nav.js` fixed all active pages.
    // So for the desktop nav, the string might have the active class for blog!
    // But for the mobile nav, unify_nav doesn't touch it.

    content = content.replace(/(<a class="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-secondary" href="industries\.html">Industries<\/a>)\s*\n\s*<a class="text-slate-700 dark:text-slate-300 font-medium hover:text-\[#D62828\] transition-colors duration-200 text-sm" href="blog\.html">Blog<\/a>/g, `$1\n${correctBlogLink}`);

    if (content !== original) {
        fs.writeFileSync(path.join(dir, f), content);
        console.log(`Fixed mobile blog nav class in ${f}`);
    }
});
