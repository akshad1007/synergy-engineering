const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const FOOTER_DESC_NEW = 'PAN-India authorized distributor of electrical testing & measurement solutions. ISO 9001:2015 | NABL-Accredited | Since 2016.';
const ADDRESS_NEW = 'E7-221, Bhumi World Industrial Park, Majiwada, Thane (West), Maharashtra 400601';
const PHONE_NEW = '+91-22-2580-5555';
const PHONE_HREF = 'tel:+912225805555';
const EMAIL_NEW = 'info@synergy-engg.com';
const EMAIL_HREF = 'mailto:info@synergy-engg.com';
const WHATSAPP_LINK = 'https://wa.me/912225805555';

const LOGO_TEXT_TOP = '<a class="text-xl font-extrabold tracking-tight text-[#D62828]" href="index.html">Synergy Engineering</a>';
const LOGO_TEXT_FOOTER = '<a class="text-2xl font-black text-white block" href="index.html">Synergy Engineering</a>';
const LOGO_IMG_HTML = '<a href="index.html"><img alt="Synergy Engineering Logo" class="h-10 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ui1hCUuTZAT0yvaf75B3Z-xM9MoYxrF3vCmUMX7Jn0oIMznXDFCLHnoIdIsmnA0_q-bEhBXaLYimN8Rt76SVCNuuhji1lMwjgIiI2ro6ETEMgFtmCVwfY98PynhsfLcBF676VAiBR4m8RfNAI7wq07FUKjezPlgyevaTOnrOfulqjq9wnOEjDlvY-r_4ZNNJkBD8LVTSsD9nNlCiTdwh8Ik_5dtM7EIDkvVeByyhWl53gusCqjVY_XQR8v_eY1-04kdTjOLlZQ1"/></a>';

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Footer description replace
    content = content.replace(/Delivering industrial precision and high-performance testing solutions for power, energy, and communication sectors\./g, FOOTER_DESC_NEW);
    
    // 2. Since 2004/1998/1994 -> Since 2016
    content = content.replace(/(since|Since) (1994|1998|2004)/g, 'Since 2016');
    
    // 3. Address
    content = content.replace(/Wagle Industrial Estate, Thane \(W\), Maharashtra 400604, India/gi, ADDRESS_NEW);
    
    // 4. Phone
    content = content.replace(/\+91-0000-000-000/g, PHONE_NEW);
    content = content.replace(/tel:\+1234567890/g, PHONE_HREF);
    content = content.replace(/tel:\+912225805555/g, PHONE_HREF);
    
    // 5. Email
    content = content.replace(/info@synergyeng\.com/g, EMAIL_NEW);
    content = content.replace(/contact@synergyeng\.com/g, EMAIL_NEW);
    
    // 6. WhatsApp
    content = content.replace(/https:\/\/wa\.me\/1234567890/g, WHATSAPP_LINK);
    
    // 7. Contact form dropdown
    if (file === 'contact.html' || file === 'quote.html') {
        const oldDropdown = /<option disabled="" selected="" value="">Select an option<\/option>\s*<option>Product Inquiry<\/option>\s*<option>Service Request<\/option>\s*<option>Project Consultation<\/option>\s*<option>Other<\/option>/g;
        const newDropdown = `<option disabled="" selected="" value="">Select an option</option>
<option>Quote Request</option>
<option>Product Inquiry</option>
<option>Service Inquiry</option>
<option>Calibration</option>
<option>Technical Support</option>
<option>General</option>`;
        content = content.replace(oldDropdown, newDropdown);
    }
    
    // 8. DATA SCREEN replacements (already mostly done, ensure globally clean)
    content = content.replace(/{{DATA:SCREEN:SCREEN_\d{2}}}/g, 'contact.html');
    
    // 9. Remove Blog from Nav and Footer
    content = content.replace(/<a[^>]*href="blog\.html"[^>]*>Blog<\/a>/g, '');
    content = content.replace(/<li><a[^>]*href="blog\.html"[^>]*>Blog<\/a><\/li>/g, '');
    
    // 10. Replace Logo Text with Actual Image
    content = content.replace(LOGO_TEXT_TOP, LOGO_IMG_HTML);
    content = content.replace(LOGO_TEXT_FOOTER, LOGO_IMG_HTML);
    
    // 11. Fix CTA Section at bottom of index.html
    if (file === 'index.html') {
        content = content.replace(/href="contact\.html"[^>]*>\s*Request a Quote/i, 'href="quote.html">\n                Request a Quote');
    }

    // 12. Copyright year 2026
    const copyrightHtml = `\n<div class="col-span-1 border-t border-slate-700/50 mt-12 pt-8 text-center text-slate-500 text-sm sm:col-span-2 lg:col-span-4">\n    &copy; 2026 Synergy Engineering. All rights reserved.\n</div>\n`;
    if (!content.includes('2026 Synergy Engineering')) {
        content = content.replace(/<\/div>\s*<\/footer>/i, `</div>${copyrightHtml}</footer>`);
    }

    // 13. Industries Primary Equipment generic items -> specific Megger/MTE/Brother products
    if (file === 'industries.html') {
        content = content.replace('High-Voltage Prototyping Systems', 'Megger Primary Injection Testers');
        content = content.replace('Industrial Steam Turbines', 'Megger Relay Test Systems');
        content = content.replace('Ultra-High Voltage Transformers', 'Megger Transformer Testing Equip.');
        content = content.replace('Avionics Cooling Modules', 'MTE High Precision Calibrators');
        content = content.replace('Traction Power Converters', 'Megger Cable Fault Locators');
        content = content.replace('6-Axis Robotic Arms', 'Brother Industrial Label Printers');
        content = content.replace('Automated Gantry Cranes', 'Brother Portable Tube Printers');
        content = content.replace('Underground Ventilation Systems', 'MTE Portable Meter Test Systems');
        content = content.replace('Cleanroom Filtration Units', 'MTE Power Quality Analyzers');
        content = content.replace('Smart City Sensor Hubs', 'Megger Insulation Testers');
    }

    fs.writeFileSync(path.join(dir, file), content);
});

console.log("Successfully applied all 13 checklist requirements.");
