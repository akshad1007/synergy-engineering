const fs = require('fs');

// Contact
let contact = fs.readFileSync('pages/contact.html', 'utf8');
contact = contact.replace(/<div class="text-green-600 font-bold p-4 bg-green-50 rounded-lg hidden" data-fs-success>[^<]+<\/div>/g, \<div data-fs-success class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 hidden backdrop-blur-sm">
    <div class="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-center max-w-lg mx-4 transform transition-all border-t-4 border-green-500">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span class="material-symbols-outlined text-5xl text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
        </div>
        <h3 class="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Message Sent!</h3>
        <p class="text-gray-600 text-lg mb-8 leading-relaxed">Thank you for reaching out. We have received your inquiry and our team will get back to you shortly.</p>
        <button onclick="window.location.reload()" class="bg-secondary text-white px-8 py-4 rounded-md font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all w-full shadow-lg">Awesome, thanks!</button>
    </div>
</div>\);
fs.writeFileSync('pages/contact.html', contact);

// Quote
let quote = fs.readFileSync('pages/quote.html', 'utf8');
quote = quote.replace(/<div class="text-green-600 font-bold p-6 bg-green-50 rounded-lg hidden mb-6 shadow-sm border border-green-200" data-fs-success>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, \<div data-fs-success class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 hidden backdrop-blur-sm">
    <div class="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-center max-w-lg mx-4 transform transition-all border-t-4 border-green-500">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span class="material-symbols-outlined text-5xl text-green-600" style="font-variation-settings: 'FILL' 1;">verified</span>
        </div>
        <h3 class="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Quote Received!</h3>
        <p class="text-gray-600 text-lg mb-8 leading-relaxed">Thank you for your specification. Our engineers will review it and provide a comprehensive quotation within 24-48 business hours.</p>
        <button onclick="window.location.reload()" class="bg-secondary text-white px-8 py-4 rounded-md font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all w-full shadow-lg">OKAY</button>
    </div>
</div>\);
fs.writeFileSync('pages/quote.html', quote);
