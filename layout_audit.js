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

let structuralIssues = [];

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Check images missing width/height styling or responsiveness (e.g. w-full, h-full, max-w)
    const imgRegex = /<img[^>]*class="([^"]*)"[^>]*>/g;
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
        const classes = match[1];
        if (!classes.includes('w-') && !classes.includes('h-') && !classes.includes('auto')) {
             structuralIssues.push({ type: 'Image Missing Responsive Size Class', file: file, classes });
        }
    }
    // Check images lacking an alt attribute
    const allImgsRegex = /<img([^>]*)>/g;
    while ((match = allImgsRegex.exec(content)) !== null) {
        if (!match[1].includes('alt="')) {
            structuralIssues.push({ type: 'Image Missing Alt Attribute for SEO/Accessiblity', file: file });
        }
    }

});

console.log('Structural/Layout Issues:', structuralIssues.length);
if (structuralIssues.length > 0) {
    let sample = structuralIssues.slice(0, 10);
    console.log(sample);
}

