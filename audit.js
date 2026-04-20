const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const allHrefs = new Set();
const missingFiles = [];

files.forEach(file => {
   const content = fs.readFileSync(path.join(dir, file), 'utf8');
   
   // Extract all hrefs
   const matches = content.match(/href="([^"]+)"/g);
   if(matches) {
       matches.forEach(m => {
           let link = m.split('"')[1];
           // ignore absolute links and anchors on same page
           if(!link.startsWith('http') && !link.startsWith('#') && !link.startsWith('tel:') && !link.startsWith('mailto:')) {
               // extract just the filename
               const baseFile = link.split('#')[0].split('?')[0];
               if(!files.includes(baseFile) && baseFile !== '') {
                   missingFiles.push({ file, missingLink: link });
               }
           }
       });
   }
});

if(missingFiles.length > 0) {
    console.log("Broken links found:");
    console.log(missingFiles);
} else {
    console.log("No broken internal links found.");
}

// Check for script errors possibility
let scriptIssues = 0;
files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    if(content.includes("menuToggle.addEventListener('click', openMenu);")) {
        if(!content.includes("if (menuToggle)")) {
           // We should wrap the event listeners in an if check just to be safe from console errors
           scriptIssues++;
        }
    }
});
console.log(`Script robustness issues found on ${scriptIssues} pages.`);

// Also check if any file has duplicate standard headers injected by mistake
let doubleHeaders = 0;
files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const navMatch = content.match(/<!-- TopNavBar -->/g);
    if(navMatch && navMatch.length > 1) {
        console.log(`Duplicate header found in ${file}`);
        doubleHeaders++;
    }
});
if(doubleHeaders === 0) console.log("No duplicate headers.");
