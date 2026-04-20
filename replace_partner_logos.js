const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'pages', 'index.html');
let content = fs.readFileSync(file, 'utf8');

// Replace Megger
content = content.replace(
    /<img alt="Megger logo" class="[^"]*" src="[^"]*"\/>/,
    '<img alt="Megger logo" class="h-8 md:h-12 w-auto object-contain" src="../screenshots/megger_logo.svg"/>'
);

// Replace EMH
content = content.replace(
    /<img alt="EMH logo" class="[^"]*" src="[^"]*"\/>/,
    '<img alt="EMH logo" class="h-8 md:h-12 w-auto object-contain" src="../screenshots/emh-logo-r2.png"/>'
);

// Replace Brother
content = content.replace(
    /<img alt="Brother logo" class="[^"]*" src="[^"]*"\/>/,
    '<img alt="Brother logo" class="h-8 md:h-12 w-auto object-contain" src="../screenshots/Brother-Logo.png"/>'
);

fs.writeFileSync(file, content);
console.log('Successfully replaced 3 partner logos in index.html');
