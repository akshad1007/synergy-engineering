import os, re, glob

replacements = {
    'href="blog-post-1.html"': 'href="blog-post.html"',
    'href="blog-post-2.html"': 'href="blog-post.html"',
    'href="blog-post-3.html"': 'href="blog-post.html"',
    'href="quote.html"': 'href="contact.html"',
    'href="index.html#home"': 'href="index.html"',
}

# Regex patterns for sub-pages
regex_replacements = [
    (r'href="services/[^"]*\.html"', 'href="services.html"'),
    (r'href="industries/[^"]*\.html"', 'href="industries.html"'),
]

for f in glob.glob('pages/*.html'):
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    for pattern, replacement in regex_replacements:
        content = re.sub(pattern, replacement, content)
    
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(content)
    
    print(f"Fixed: {os.path.basename(f)}")

print("All links fixed!")
