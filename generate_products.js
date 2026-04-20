const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'pages', 'product-detail.html');
const productsDir = path.join(__dirname, 'products');

if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir);
}

let templateContent = fs.readFileSync(templatePath, 'utf8');

const pages = ['index', 'about', 'products', 'services', 'industries', 'blog', 'careers', 'contact', 'quote'];
pages.forEach(page => {
    const regex = new RegExp(`href="${page}.html"`, 'g');
    templateContent = templateContent.replace(regex, `href="../pages/${page}.html"`);
});
const regexProductsParam = new RegExp(`href="products.html\\?brand=([^"]+)"`, 'g');
templateContent = templateContent.replace(regexProductsParam, `href="../pages/products.html?brand=$1"`);

const products = [
    {
        id: '680-adx',
        title: 'Megger 680-ADX Insulation Tester',
        name: 'Megger 680-ADX',
        desc: 'Advanced automatic diagnostic insulation tester for high voltage machines.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjrf7ecXVzw2Sugr2xC8DjNxBmULYXjeriaxO-bUMWcj4vPOjrYezeTujJfCEwJU0O3TRP84aOn1n1YP0l9ZY4wEtAzAGBfDxUFxlJ3JAoOaTxMJk6-ZqzwsUztDFSSbJF0dVIX4rNNijrAYcWnZgF7ZP2vuDXWycBBTucLyXv41qfIx6ugUZiinEgLuyYlHpS_aqr5dMV-xxXMTPkI6uF71lJhluNHPErSUKW_N95Qr7-nJx2rOIGvby5q6n4fE1HlhwWmZmbVr0'
    },
    {
        id: 'bite5',
        title: 'Megger BITE5 Battery Tester',
        name: 'Megger BITE5',
        desc: 'Battery impedance tester for measuring lead-acid and NiCd battery performance.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ErNwjvdN_m0kwh9DdSPgchdqFM_s5PKg2oRDFzqESF3jDMLmVDJNRzj3oY3bKxKEg67fckeHcMkUphjv0bwfxd43si4YsPEFZz6AZooFaqO1I0k0wApgdRRY7IVskRNCFgdzE1fSQK5b8KpUqM4v3mv7MbQGknchI-vsXC_4Q0IZkP_nu1mF_m6_kMEAm88z6GBd5HLBfvVtn7JH_QADDHmQNZovIovBQY8uXNeuGiA8FFUVc2bcHBdI0-uElvE8fyV1nERMatI'
    },
    {
        id: 'mte-filters',
        title: 'MTE Filters',
        name: 'MTE Filters',
        desc: 'High-efficiency harmonic filters for industrial power stabilization and noise reduction.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzr8XmG1OAuRSdybz_1LUyAOy7K2-Lv9e6Akd58ZyxcVEfJuUGLOTMoHvwJ2cVkQE7PgNRwKZBWYwT7gDU-OyEG-QUmO199yD8atWxdV9o3MLTGoiwnmcRyy1HfS4PoBg_7NFcPnnYVCp8d1j3wRQCGDfbxQ90RaF77LgWDvgBGQNqP2DmjezcBdM9sbCXRY0RDwJqqN0rgFWM5sbn4eGReBtDkWW16yuYxatcylRC4ADbJTzKBD8NB68FE2B3GMZulNLhc0ypLL4'
    },
    {
        id: 'pt-e850tkw',
        title: 'Brother PT-E850TKW Label Printer',
        name: 'Brother PT-E850TKW',
        desc: 'Industrial PC connectable labeling system for electrical and network tagging.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFua1DtjQVzm_j5w7i676Pp25NEuNJtHoYUtBTwV-RSCvpVMvXzI0c-0f-9yk2NXEGQii_GN1q0dQAGt6Z_kcXsuxzoPLA3PUXuDSIf_g1nTsXgUcVwjVn-ON7mjS0NB8jvYpavHS7YPA-kaWQaQu2Ebe9SW6xaViByRMPHq92lEMywn4dfPYaZc8A2TCKX4mdSRbOL49uSlQ4Oqks12eH5h4K2496D6OnQOSW-FIKm2id6KrSP-oF2seycjU2p_VQU3Qy3TAzoDg'
    },
    {
        id: 'bm5200',
        title: 'Megger BM5200 Insulation Tester',
        name: 'Megger BM5200',
        desc: 'Analog/Digital battery powered insulation resistance tester.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCuYfNvmrrcztpnzHD414EMErsbtmmrHZZUPtI2hraNUX2OUfroqsAOUEvP5G6dFFc3HOcMosubGpIHVzIrFTASYKSoWhheFiQxwxWVFW6PCBaEln0vk-VtCEZ9hGxxd9wClWe5jjnkl4BfwiTNoKszqJWflwGhlb8gYlXwrCl5vG0ECLpuywdTdH7X1D1jG93Ju4TTnOwaueqCdmTKlR5Pxok7TqquJNQbODRy6Jn9NpYLOailOecC6bQ7Mml0-jrGm25hgnVkeI'
    },
    {
        id: 'mit5252',
        title: 'Megger MIT5252 Insulation Tester',
        name: 'Megger MIT5252',
        desc: 'Diagnostic insulation resistance tester for preventative maintenance.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFxcd0OThruCr2YrWDHQox7BBhRqs6zrwHmP7Wf7SxB9PWqg5Vo07SqiqUrOKzYPwScy9GFh0Z-msg31vLxEH2qWwxkVsrt0sO5ZElrTIlmsbGDj8-FtwsZHO6cKaVUav189kV6FnOYNCTA7N4NsRreWIPzDnRBwCeASiLs9U3xbSzaPLyQzbihrjMdvCFLTMl6kQbeA7vx0XtMX2b3Sqt0YoV7SSCXgXywXcoaq7Ut4VP6Os2AizdUhuzP7jIStVWniOrIfcp7x8'
    },
    {
        id: 'mte-reactors',
        title: 'MTE Reactors',
        name: 'MTE Reactors',
        desc: 'Input and output reactors for motor protection and peak current limiting.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSkm51eiEGNL78oddmo3pn-dSY5QfdY2gaEUyucSpoq7r1TzlJxZFtcPHABNUoh9K8txyoy9r88m75OGSWseLO1XE2YKOQJ2zLv6TsTFRkJ8801_4vyxWReY2BsuVNeIKqrH4IKfkVuRLWQmklYYFL6vHET-1GMZdbgIz2JCOwXwINv8n_eFxNIvYjHqlctcM3Kq3YL1QLnrf2-wzcl6ZcP4gjy9LCgDZ-OvV3r6iI1qLKuI9275pOfjyuggnY9-LTM3oN6uwH0mg'
    },
    {
        id: 'pt-e560btvp',
        title: 'Brother PT-E560BTVP Label Printer',
        name: 'Brother PT-E560BTVP',
        desc: 'Bluetooth enabled professional industrial label printer with carry case.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJYqbL5rWrVnI29lXDaLNR3A2pRBOqXCP-aTgHJPn8chyxpZLRseGxPij4c3Ep7pUWPSH-ah39Idmj9qKkkZXhs9xLqCP_VNB4s6_Teprpu7xIgCzIzE6jtgjMqkOnMiO1AtLGkgJBZpup-rxpcYoxgrgdnFQOgOizkOr3wxAtQSMVVQGIL46e_g0SMxySFL0nQ-U9tC-N9uUNljcx5tj4KPyFQ-IhLvHsnalYYEnx2RXXgQTbvDxvU1Hd5Bk-w5fhUy2W8WpLay4'
    }
];

products.forEach(p => {
    let html = templateContent;
    html = html.replace(/<title>.*?<\/title>/, `<title>${p.title} | Synergy Engineering</title>`);
    html = html.replace(/<h1 class="text-4xl lg:text-5xl font-black text-primary-container leading-tight tracking-tighter">.*?<\/h1>/, `<h1 class="text-4xl lg:text-5xl font-black text-primary-container leading-tight tracking-tighter">${p.name}</h1>`);
    html = html.replace(/<p class="text-on-surface-variant text-lg leading-relaxed">.*?<\/p>/, `<p class="text-on-surface-variant text-lg leading-relaxed">${p.desc}</p>`);
    html = html.replace(/<img alt="Megger 680-ADX Insulation Tester"[^>]*src="[^"]*"[^>]*>/, `<img alt="${p.title}" class="w-full h-auto object-contain mix-blend-multiply" src="${p.image}"/>`);

    const outFile = path.join(productsDir, `${p.id}.html`);
    fs.writeFileSync(outFile, html);
    console.log(`Created ${outFile}`);
});

const productsHtmlPath = path.join(__dirname, 'pages', 'products.html');
let productsHtmlContent = fs.readFileSync(productsHtmlPath, 'utf8');

products.forEach(p => {
    let shortName = p.name.split(' ').slice(1).join(' ');
    if (p.name.includes('Filters')) shortName = 'Filters';
    if (p.name.includes('Reactors')) shortName = 'Reactors';
    
    // Look for the View Details link inside the product card
    const blockRegex = new RegExp(`(<h3[^>]*>${shortName}</h3>[\\s\\S]*?<a[^>]*href)="[^"]*"`, 'g');
    productsHtmlContent = productsHtmlContent.replace(blockRegex, `$1="../products/${p.id}.html"`);
});

fs.writeFileSync(productsHtmlPath, productsHtmlContent);
console.log('Updated products.html with links to individual product pages.');
