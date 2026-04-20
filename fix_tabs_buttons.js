const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'products'),
    path.join(__dirname, 'pages')
];

let filesProcessed = 0;

const interactiveTabsSection = `<!-- Tabs Section -->
<section class="max-w-7xl mx-auto px-8 mt-24" id="product-details-tabs">
<div class="border-b border-outline-variant/30 flex gap-12 overflow-x-auto" id="tab-buttons">
<button onclick="switchTab('overview')" id="btn-overview" class="tab-btn pb-4 border-b-[3px] border-[#b90c17] text-[#101c2e] font-bold text-sm uppercase tracking-widest whitespace-nowrap transition-colors">Overview</button>
<button onclick="switchTab('specs')" id="btn-specs" class="tab-btn pb-4 text-outline font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:text-primary-container transition-colors">Specifications</button>
<button onclick="switchTab('downloads')" id="btn-downloads" class="tab-btn pb-4 text-outline font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:text-primary-container transition-colors">Downloads</button>
<button onclick="switchTab('support')" id="btn-support" class="tab-btn pb-4 text-outline font-bold text-sm uppercase tracking-widest whitespace-nowrap hover:text-primary-container transition-colors">Support</button>
</div>

<div class="py-12">
    <!-- Overview Tab Content -->
    <div id="tab-overview" class="tab-content block animate-fadeIn">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="space-y-6">
                <h2 class="text-2xl font-extrabold text-primary-container">Industrial Reliability Redefined</h2>
                <p class="text-on-surface-variant leading-relaxed">Engineered for the modern electrical professional who requires more than just a measurement. With its advanced noise filtering and high-output current, it provides stable readings in the most challenging electrical environments, such as high-voltage substations.</p>
                <p class="text-on-surface-variant leading-relaxed">Built into a rugged dual-case design, the unit is protected against impact and environmental elements, making it the industry standard for field testing. Features a large, clear display that provides visibility even in direct sunlight or dark enclosures.</p>
            </div>
            <div class="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <span class="material-symbols-outlined text-6xl text-secondary mb-4">verified</span>
                <h3 class="text-xl font-bold text-primary-container mb-2">Certified Precision</h3>
                <p class="text-on-surface-variant text-sm">All equipment is rigorously tested and shipped with calibration certificates traceable to international standards.</p>
            </div>
        </div>
    </div>

    <!-- Specifications Tab Content -->
    <div id="tab-specs" class="tab-content hidden animate-fadeIn">
        <div class="bg-surface-container-low p-8 rounded-xl max-w-4xl mx-auto">
            <h3 class="text-lg font-bold text-primary-container mb-6">Technical Specifications Table</h3>
            <div class="space-y-0 border border-outline-variant/20 rounded-lg overflow-hidden">
                <div class="grid grid-cols-2 bg-surface-container-lowest border-b border-outline-variant/10 p-4">
                    <span class="font-bold text-primary-container">Operating Voltage</span>
                    <span class="text-on-surface-variant">Universal Range</span>
                </div>
                <div class="grid grid-cols-2 bg-surface-container-low border-b border-outline-variant/10 p-4">
                    <span class="font-bold text-primary-container">Accuracy Class</span>
                    <span class="text-on-surface-variant">±0.5% or better</span>
                </div>
                <div class="grid grid-cols-2 bg-surface-container-lowest border-b border-outline-variant/10 p-4">
                    <span class="font-bold text-primary-container">Operating Temp Range</span>
                    <span class="text-on-surface-variant">-20°C to +50°C</span>
                </div>
                <div class="grid grid-cols-2 bg-surface-container-low border-b border-outline-variant/10 p-4">
                    <span class="font-bold text-primary-container">Interface</span>
                    <span class="text-on-surface-variant">USB / Bluetooth®</span>
                </div>
                <div class="grid grid-cols-2 bg-surface-container-lowest p-4">
                    <span class="font-bold text-primary-container">IP Rating</span>
                    <span class="text-on-surface-variant">IP54 / IP65</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Downloads Tab Content -->
    <div id="tab-downloads" class="tab-content hidden animate-fadeIn">
        <div class="max-w-3xl mx-auto space-y-4">
            <h3 class="text-lg font-bold text-primary-container mb-6">Available Resources</h3>
            <a href="#" onclick="alert('Downloading User Manual PDF...')" class="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant/20 rounded hover:shadow-md transition-shadow">
                <div class="flex items-center gap-4">
                    <span class="material-symbols-outlined text-secondary">picture_as_pdf</span>
                    <span class="font-medium text-primary-container">User Manual</span>
                </div>
                <span class="material-symbols-outlined text-outline">download</span>
            </a>
            <a href="#" onclick="alert('Downloading Datasheet PDF...')" class="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant/20 rounded hover:shadow-md transition-shadow">
                <div class="flex items-center gap-4">
                    <span class="material-symbols-outlined text-secondary">description</span>
                    <span class="font-medium text-primary-container">Technical Datasheet</span>
                </div>
                <span class="material-symbols-outlined text-outline">download</span>
            </a>
        </div>
    </div>

    <!-- Support Tab Content -->
    <div id="tab-support" class="tab-content hidden animate-fadeIn">
        <div class="max-w-3xl mx-auto bg-surface-container-low p-8 rounded-xl text-center space-y-6">
            <span class="material-symbols-outlined text-5xl text-primary-container">support_agent</span>
            <h3 class="text-2xl font-bold text-primary-container">Need Technical Support?</h3>
            <p class="text-on-surface-variant">Our service centre engineers are ready to assist you with installation, troubleshooting, and calibration queries.</p>
            <div class="flex justify-center gap-4 pt-4">
                <a href="tel:+912225805555" class="bg-primary-container text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-secondary transition-colors"><span class="material-symbols-outlined">call</span> Call Support</a>
                <a href="mailto:support@synergy-engg.com" class="border border-primary-container text-primary-container px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-colors"><span class="material-symbols-outlined">mail</span> Email Us</a>
            </div>
        </div>
    </div>
</div>
</section>`;

const jsSnippet = `
<script>
    function switchTab(tabId) {
        // Hide all contents
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(c => {
            c.classList.remove('block');
            c.classList.add('hidden');
        });

        // Remove active class from all buttons
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(b => {
            b.classList.remove('border-b-[3px]', 'border-[#b90c17]', 'text-[#101c2e]');
            b.classList.add('text-outline');
        });

        // Show target content
        document.getElementById('tab-' + tabId).classList.remove('hidden');
        document.getElementById('tab-' + tabId).classList.add('block');

        // Activate button
        const activeBtn = document.getElementById('btn-' + tabId);
        activeBtn.classList.remove('text-outline');
        activeBtn.classList.add('border-b-[3px]', 'border-[#b90c17]', 'text-[#101c2e]');
    }
</script>
`;

targetDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    
    files.forEach(file => {
        // Skip files that aren't product details
        if (!file.includes('-') && file !== 'product-detail.html' && file !== 'bite5.html' && file !== 'bm5200.html' && file !== 'mit5252.html' && !file.includes('filters') && !file.includes('reactors')) {
            return;
        }

        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Ensure we are processing a product page
        if (content.includes('Overview') && content.includes('Specifications') && content.includes('Downloads')) {
            
            // 1. Fix Enquire Now Button
            const quoteLink = dir.includes('products') ? '../pages/quote.html' : 'quote.html';
            content = content.replace(
                /<button class="bg-secondary text-white px-10 py-4 rounded-md font-bold text-lg hover:brightness-110 shadow-lg shadow-secondary\/20 flex items-center justify-center gap-2">\s*Enquire Now\s*<span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward<\/span>\s*<\/button>/g,
                `<a href="${quoteLink}" class="bg-secondary text-white px-10 py-4 rounded-md font-bold text-lg hover:brightness-110 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2"> Enquire Now <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span> </a>`
            );

            // 2. Fix Datasheet Button
            content = content.replace(
                /<button class="border-2 border-primary-container\/10 text-primary-container px-10 py-4 rounded-md font-bold text-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">\s*<span class="material-symbols-outlined" data-icon="download">download<\/span>\s*Datasheet\s*<\/button>/g,
                `<a href="#" onclick="alert('Downloading Datasheet PDF...')" class="border-2 border-primary-container/10 text-primary-container px-10 py-4 rounded-md font-bold text-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"> <span class="material-symbols-outlined" data-icon="download">download</span> Datasheet </a>`
            );

            // 3. Replace the entire tabs `<section ...>` up to the next `<!-- Related Products Section -->`
            // We use a regex down to `<!-- Related Products Section -->`
            const tabsRegex = /<!-- Tabs Section -->[\s\S]*?(?=<!-- Related Products Section -->)/g;
            if (tabsRegex.test(content)) {
                content = content.replace(tabsRegex, interactiveTabsSection + '\n');
            }

            // 4. Inject JS script at the bottom before </body>
            if (!content.includes('function switchTab(')) {
                content = content.replace('</body>', jsSnippet + '\n</body>');
            }

            if (content !== original) {
                fs.writeFileSync(filePath, content);
                filesProcessed++;
                console.log(`Fully functionalized product buttons & tabs in ${filePath}`);
            }
        }
    });
});

console.log(`Successfully completed functional updates for ${filesProcessed} files.`);
