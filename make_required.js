const fs = require('fs');
const path = require('path');

const file = path.join('pages', 'quote.html');
let content = fs.readFileSync(file, 'utf8');

// 1. Add red asterisk to all labels that are headers for inputs
// Specifically matching the standard form labels: <label class="text-xs font-bold text-slate-500 uppercase tracking-wider...">Text</label>
content = content.replace(/(<label[^>]*uppercase tracking-wider[^>]*>)([^<]+)(<\/label>)/g, (match, p1, p2, p3) => {
    // Avoid double adding if script is run twice
    if (match.includes('text-secondary ml-1')) return match;
    return `${p1}${p2}<span class="text-secondary ml-1">*</span>${p3}`;
});

// For the File Upload label which has a block mb-2 class:
// The regex above will catch it because it has "uppercase tracking-wider"

// 2. Add required to inputs, selects, textareas 
// We skip type="checkbox" because that forces the user to check all checkboxes
// We skip type="radio" because it only needs to be on one, actually adding it to all radios of same name works perfectly in HTML5.
content = content.replace(/(<(?:input|textarea|select)[^>]+)(>)/ig, (match, prefix, suffix) => {
    // Skip checkboxes
    if (prefix.includes('type="checkbox"')) return match;
    
    // Skip if already required
    if (prefix.includes(' required')) return match;
    
    // Skip inputs that are hidden (like the file input? Wait, if file input is hidden but required, HTML5 validation will fail silently and block form submission because the browser can't focus on it!)
    // If the file input has class "hidden", we CANNOT use HTML5 "required" attribute directly or it will break the form. We should remove the required from type="file" if it has class "hidden".
    if (prefix.includes('type="file"') && prefix.includes('class="hidden"')) {
        // Technically they asked for all to be compulsory, but hiding file inputs makes HTML5 required break. Let's add it anyway and if they complain we fix it, or better yet, make the checkbox/file input custom required logic.
        // Actually, no, if I put `required` on a hidden input, Chrome will throw an error: "An invalid form control with name='' is not focusable." It completely ruins the form.
        // I will deliberately skip `type="file"` if it is hidden, or change class="hidden" to opacity-0 absolute w-0 h-0.
        // Let's change class="hidden" to something focusable but invisible.
        if (prefix.includes('class="hidden"')) {
             prefix = prefix.replace('class="hidden"', 'class="opacity-0 absolute inset-0 z-[-1]"');
        }
    }
    
    // Skip search or nav elements if any (but we're only looking inside the form ideally. Wait, there's a nav search or subscribe email?)
    // Yes, the footer subscribe email: <input class="... bg-white/5 ... " placeholder="Email Address" type="email"/>
    // We can avoid the footer by only doing this regex inside <form> ... </form>.
    return match;
});

// Let's only apply required inside the form block
const formRegex = /(<form[^>]*>)([\s\S]*?)(<\/form>)/i;
const formMatch = content.match(formRegex);

if (formMatch) {
    let formContent = formMatch[2];
    
    // Apply required attributes inside form only
    formContent = formContent.replace(/(<(?:input|textarea|select)[^>]+)(>)/ig, (match, prefix, suffix) => {
        // Skip checkboxes
        if (prefix.includes('type="checkbox"')) return match;
        // Skip if already required
        if (prefix.includes(' required')) return match;
        
        // Handle hidden file input focusability
        if (prefix.includes('type="file"') && prefix.includes('class="hidden"')) {
             prefix = prefix.replace('class="hidden"', 'class="opacity-0 absolute inset-0 z-[-1] w-px h-px"');
        }
        
        return `${prefix} required${suffix}`;
    });
    
    content = content.replace(formRegex, `$1${formContent}$3`);
}

fs.writeFileSync(file, content);
console.log('Successfully made all relevant fields required with visual asterisks.');
