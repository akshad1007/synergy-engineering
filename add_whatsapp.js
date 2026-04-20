const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// Assets to Inject
const whatsappStyle = `
        @keyframes pulse-whatsapp {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-pulse-whatsapp {
            animation: pulse-whatsapp 2s infinite;
        }
    </style>`;

const whatsappButtonHTML = `
<!-- Floating WhatsApp Button -->
<a class="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-black/20 hover:scale-110 transition-transform duration-200 animate-pulse-whatsapp" href="https://wa.me/1234567890" target="_blank">
<svg class="w-8 h-8 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
</a>
`;

// Extract proper Footer from index.html (We will fix it here)
let indexContent = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const footerRegex = /(<footer [\s\S]*?<\/footer>)/i;
const footerMatch = indexContent.match(footerRegex);

if (!footerMatch) {
    console.error("Could not find footer in index.html");
    process.exit(1);
}

let standardFooter = footerMatch[1];
// FIX 1: Make footer navigational links point properly
standardFooter = standardFooter.replace(/href="#about"/g, 'href="about.html"');
// FIX 2: Set properly clickable Social Media Links
standardFooter = standardFooter.replace(
    /<div class="flex gap-4 pt-4">[\s\S]*?<\/div>/,
    `<div class="flex gap-4 pt-4">
<a href="#" target="_blank" class="material-symbols-outlined text-slate-400 hover:text-secondary transition-colors block decoration-transparent">social_leaderboard</a>
<a href="#" target="_blank" class="material-symbols-outlined text-slate-400 hover:text-secondary transition-colors block decoration-transparent">language</a>
<a href="mailto:info@synergyeng.com" class="material-symbols-outlined text-slate-400 hover:text-secondary transition-colors block decoration-transparent">mail</a>
</div>`
);

let fixes = 0;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    const original = content;

    // STEP 1: Fix Footer
    // Replace existing footer with standard footer
    content = content.replace(/(<footer [\s\S]*?<\/footer>)/ig, standardFooter);
    
    // Fallback if no footer exists but the file is an HTML page
    if (!content.includes('<footer') && content.includes('<script>')) {
        content = content.replace(/(<script>)/i, standardFooter + '\n$1');
    }

    // STEP 2: WhatsApp Settings 
    // Add WhatsApp Button (If not already there)
    if (!content.includes('animate-pulse-whatsapp" href="https://wa.me')) {
        // Place it safely before the script tags or the closing body tag
        content = content.replace(/(<script>)/i, whatsappButtonHTML + '\n$1');
    }

    // Add WhatsApp Animation CSS (If not already there)
    if (!content.includes('@keyframes pulse-whatsapp')) {
        content = content.replace(/<\/style>/i, whatsappStyle);
    }

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        fixes++;
        console.log('ADDED WHATSAPP/FOOTER: ' + file);
    }
});

console.log(`\nSuccessfully added proper Footer and WhatsApp widgets across ${fixes} pages.`);
