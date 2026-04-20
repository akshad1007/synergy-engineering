const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace the logo's height class from h-10 (40px) to h-16 (64px), which almost fills the 72px header perfectly.
    // Also ensuring any footer logo is scaled identically if it uses the same class structure.
    let newContent = content.replace(/class="h-10 w-auto" src="\.\.\/screenshots\/logo_synergy\.png"/g, 'class="h-16 md:h-16 w-auto" src="../screenshots/logo_synergy.png"');
    
    if (newContent !== content) {
        fs.writeFileSync(path.join(dir, file), newContent);
        count++;
    }
});

console.log(`Successfully increased logo size to h-16 (64px) across ${count} files.`);
