const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const assetsDir = path.join(process.cwd(), 'assets', 'images');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

async function downloadImage(url, filepath) {
    if (fs.existsSync(filepath)) return filepath;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to download ' + url);
    const buffer = await res.buffer();
    fs.writeFileSync(filepath, buffer);
    return filepath;
}

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        const filepath = path.join(dir, file.name);
        if (file.isDirectory() && file.name !== '.git' && file.name !== 'node_modules' && file.name !== 'assets') {
            walk(filepath, fileList);
        } else if (file.isFile() && filepath.endsWith('.html')) {
            fileList.push(filepath);
        }
    }
    return fileList;
}

async function run() {
    const htmlFiles = walk(process.cwd());
    const imagesMap = new Map();
    let imgCounter = 1;

    for (const f of htmlFiles) {
        const content = fs.readFileSync(f, 'utf8');
        const regex = /src=["'](https:\/\/lh3\.googleusercontent\.com[^"']+)["']/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const url = match[1];
            if (!imagesMap.has(url)) {
                imagesMap.set(url, 'img_' + (imgCounter++) + '.webp');
            }
        }
    }

    console.log('Found ' + imagesMap.size + ' specific images from external hosts. Downloading...');
    for (const [url, filename] of imagesMap.entries()) {
        try {
            await downloadImage(url, path.join(assetsDir, filename));
            console.log('Downloaded ' + filename);
        } catch (e) {
            console.error('Error on ', url, e.message);
        }
    }

    for (const f of htmlFiles) {
        let content = fs.readFileSync(f, 'utf8');
        let changed = false;
        for (const [url, filename] of imagesMap.entries()) {
            if (content.includes(url)) {
                const relativeDepth = path.relative(process.cwd(), path.dirname(f));
                let slashes = '';
                if (relativeDepth === '') {
                    slashes = './';
                } else {
                    const depthParts = relativeDepth.split(path.sep).length;
                    for (let i = 0; i < depthParts; i++) slashes += '../';
                }
                const relPath = slashes + 'assets/images/' + filename;
                content = content.split(url).join(relPath);
                changed = true;
            }
        }
        if (changed) {
            fs.writeFileSync(f, content, 'utf8');
            console.log('Updated ' + path.basename(f));
        }
    }
}
run();
