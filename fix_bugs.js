const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let fixes = 0;

const scriptRobust = `
<script>
    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        function openMenu() {
            if(mobileMenu) mobileMenu.classList.remove('translate-x-full');
            if(mobileMenuOverlay) mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        }

        function closeMenu() {
            if(mobileMenu) mobileMenu.classList.add('translate-x-full');
            if(mobileMenuOverlay) mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
        }

        if(menuToggle) menuToggle.addEventListener('click', openMenu);
        if(menuClose) menuClose.addEventListener('click', closeMenu);
        if(mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);
    });
</script>
`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    const original = content;

    // 1. Fix Broken Blog Links
    content = content.replace(/href="blog-post-\d\.html"/g, 'href="blog-post.html"');
    content = content.replace(/href="\/blog\/[^"]+"/g, 'href="blog-post.html"');

    // 2. Fix Stitch {{DATA:SCREEN}} ghosts
    content = content.replace(/href="[^"]*SCREEN_[^"]*"/g, 'href="contact.html"');

    // 3. Fix Script Robustness
    // Remove old script block
    content = content.replace(/<script>\s*const menuToggle = document\.getElementById[\s\S]*?<\/script>/g, '');
    // Remove duplicates if any were placed
    content = content.replace(/<script>\s*document\.addEventListener\("DOMContentLoaded", \(\) => {[\s\S]*?<\/script>/g, '');
    
    // Inject proper script
    content = content.replace(/<\/body>/i, scriptRobust + '\n</body>');

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        fixes++;
    }
});

console.log('Fixed broken links and script errors on ' + fixes + ' pages.');
