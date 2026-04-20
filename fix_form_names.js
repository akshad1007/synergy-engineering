const fs = require('fs');
const path = require('path');

function addNameAttrs(f) {
    if(!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');

    // Simple regex replace on inputs
    // We'll replace id="xyz" with id="xyz" name="xyz" for inputs, selects, textareas
    // if name=" is not already there
    content = content.replace(/(<(?:input|textarea|select)[^>]+id=["']([^"']+)["'])([^>]*(?:\/?>|>))/gi, (match, prefix, idValue, suffix) => {
        if (prefix.includes('name=') || suffix.includes('name=')) {
            return match; // already has name
        }
        return prefix + ' name="' + idValue + '"' + suffix;
    });
    
    // For checkboxes without id, let's explicitly look for them
    content = content.replace(/<(input[^>]+type=["']checkbox["'][^>]+value=["']([^"']+)["'][^>]*)>/gi, (match, core, val) => {
         if (core.includes('name=')) return match;
         return '<' + core + ' name="equipment[]">';
    });
    
    // For blog newsletter form that has input without id maybe?
    if (f.includes('blog.html')) {
        content = content.replace(/<input([^>]+type=["']email["'][^>]*)>/gi, (match, core) => {
            if (core.includes('name=')) return match;
            return '<input' + core + ' name="email">';
        });
    }

    fs.writeFileSync(f, content, 'utf8');
}

const filesToFix = ['pages/quote.html', 'pages/contact.html', 'pages/career-detail.html', 'pages/blog.html'];
filesToFix.forEach(addNameAttrs);
console.log('Added name attributes to forms.');
