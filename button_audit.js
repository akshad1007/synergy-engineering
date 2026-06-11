const fs = require('fs');

const walk = (dir, files = []) => {
    if (!require('fs').existsSync(dir)) return files;
    for (const file of require('fs').readdirSync(dir)) {
        const fullPath = require('path').join(dir, file);
        if (require('fs').statSync(fullPath).isDirectory()) walk(fullPath, files);
        else if (fullPath.endsWith('.html')) files.push(fullPath);
    }
    return files;
};
let allFiles = walk('pages').concat(walk('blogs')).concat(walk('products'));

let deadButtons = [];

allFiles.forEach(file => {
    const content = require('fs').readFileSync(file, 'utf8');
    
    // Find all buttons
    const btnRegex = /<button\s([^>]*)>/g;
    let match;
    while ((match = btnRegex.exec(content)) !== null) {
        let attrs = match[1];
        if (!attrs.includes('type="submit"') && 
            !attrs.includes('onclick') && 
            !attrs.includes('data-') && 
            !attrs.includes('x-') && // alpine
            !attrs.includes('href')) { // Some frameworks weirdly use href on buttons, but generally buttons don't have href
            deadButtons.push({ file: file, attrs: attrs });
        }
    }
});

console.log('Potentially Dead Buttons:', deadButtons.length);
if (deadButtons.length > 0) console.log(deadButtons.slice(0, 10));

