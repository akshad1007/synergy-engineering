const fs = require('fs');
const path = require('path');

const quoteHtmlPath = path.join('pages', 'quote.html');
let quoteHtml = fs.readFileSync(quoteHtmlPath, 'utf8');

// 1. Replace the submit button area with the dual-button container
const submitRegex = /<div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">[\s\S]*?<button[^>]*>[\s\S]*?Generate Custom Quote[\s\S]*?<\/button>\s*<\/div>/;

const newSubmitArea = `<div class="pt-8 flex flex-col items-center justify-between gap-6">
<p class="text-xs text-slate-400 italic flex items-center gap-2 w-full">
<span class="material-symbols-outlined text-sm">verified_user</span>
                                Your data is encrypted and handled per ISO 27001 standards.
                            </p>
<div class="flex flex-col md:flex-row gap-4 w-full md:w-auto self-end">
<button id="btn-download-pdf" class="flex-1 md:flex-none border-2 border-secondary text-secondary hover:text-white px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-secondary active:scale-95 transition-all duration-200" type="button">
<span class="material-symbols-outlined">download</span>
<span>Download Specification PDF</span>
</button>
<button class="flex-1 md:flex-none bg-secondary text-white px-10 py-4 rounded-lg font-black text-lg uppercase tracking-wider shadow-xl shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200" type="submit">
                                Generate Custom Quote
                            </button>
</div>
</div>`;

quoteHtml = quoteHtml.replace(submitRegex, newSubmitArea);

// 2. Add IDs to the form inputs to make them easy to grab via JS.
// Just doing a simple sequential replacement based on labels.
const mappings = [
    { label: "Company Name", id: "pdf-company" },
    { label: "Contact Name", id: "pdf-contact" },
    { label: "Work Email", id: "pdf-email" },
    { label: "Phone Number", id: "pdf-phone" },
    { label: "Project Location", id: "pdf-location" },
    { label: "Technical Specifications", id: "pdf-specs" },
];

for(const map of mappings) {
    const regex = new RegExp(`(<label[^>]*>${map.label}.*?</label>\\s*)(<input|<textarea)`);
    quoteHtml = quoteHtml.replace(regex, `$1$2 id="${map.id}" `);
}

// 3. Inject JS logic into the <script> block at the bottom
const jsLogic = `
        const btnDownload = document.getElementById('btn-download-pdf');
        if(btnDownload) {
            btnDownload.addEventListener('click', () => {
                // Gather data safely
                const val = (id) => document.getElementById(id) ? document.getElementById(id).value : 'N/A';
                
                // Get checked equipment radio
                let equipType = 'Not Specified';
                const eqChecked = document.querySelector('input[name="equip"]:checked');
                if(eqChecked) {
                    equipType = eqChecked.nextElementSibling.innerText.trim();
                }
                
                const quoteData = {
                    company: val('pdf-company'),
                    contact: val('pdf-contact'),
                    email: val('pdf-email'),
                    phone: val('pdf-phone'),
                    location: val('pdf-location'),
                    specs: val('pdf-specs'),
                    equipment: equipType,
                    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                    refId: 'SY-Q-' + new Date().getFullYear() + '-' + Math.floor(Math.random()*1000).toString().padStart(3, '0')
                };
                
                localStorage.setItem('synergy_quote_data', JSON.stringify(quoteData));
                window.open('quote-print.html', '_blank');
            });
        }
`;

quoteHtml = quoteHtml.replace(/(\}\);\s*<\/script>)/, `${jsLogic}\n$1`);

fs.writeFileSync(quoteHtmlPath, quoteHtml);
console.log('Successfully updated quote.html with Download button and logic.');
