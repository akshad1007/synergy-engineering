const fs = require('fs');
const path = require('path');

const walk = (dir, files = []) => {
    if (!fs.existsSync(dir)) return files;
    const dirMap = fs.readdirSync(dir);
    for (const file of dirMap) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, files);
        } else if (fullPath.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
};

let allFiles = walk('pages').concat(walk('blogs')).concat(walk('products'));
let emptyLinks = [];
let brokenLinks = [];
let brokenImages = [];

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // links
    const linkRegex = /<a[^>]+href="([^"]*)"[^>]*>/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        let href = match[1];
        if (!href || href === '#' || href === '') {
            emptyLinks.push({ file, link: href });
        } else if (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            href = href.split('#')[0].split('?')[0]; // strip hash and query
            if(href.length > 0) {
                let targetPath = href.startsWith('/') ? path.join(__dirname, href.substring(1)) : path.join(path.dirname(file), href);
                if (!fs.existsSync(targetPath)) {
                    brokenLinks.push({ file, href });
                }
            }
        }
    }

    // images
    const imgRegex = /<img[^>]+src="([^"]*)"[^>]*>/g;
    while ((match = imgRegex.exec(content)) !== null) {
        let src = match[1];
        if (!src.startsWith('http') && !src.startsWith('data:')) {
            src = src.split('?')[0];
            let targetPath = src.startsWith('/') ? path.join(__dirname, src.substring(1)) : path.join(path.dirname(file), src);
            if (!fs.existsSync(targetPath)) {
                brokenImages.push({ file, src });
            }
        }
    }
});

console.log('--- STRICT AUDIT RESULTS ---');
console.log('Empty/Hash Links (#):', emptyLinks.length);
console.log('Broken Local Links:', brokenLinks.length);
if (brokenLinks.length > 0) console.log(brokenLinks);
console.log('Broken Local Images:', brokenImages.length);
if (brokenImages.length > 0) console.log(brokenImages);

