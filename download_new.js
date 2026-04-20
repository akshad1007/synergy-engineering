const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const pages = [
    { name: 'index.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzgwYTRhMzRhNDI2NTRjZjhhMGQzMGU2NjI0YWY4OGU3EgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
    { name: 'products.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzMzNzlkMWVhNjE4YTRlN2M4ZmZiY2FkMGIzMjAyMjA5EgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
    { name: 'services.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzBiNTNiMzU5OGMwMDQ5M2M4ZmIwYjA3ZGJmNDYwYmNiEgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
    { name: 'industries.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzEyZjc0OWE0NTg2ZTQ3NGU5Mzg2MzE4NzM1MjE2ZmZmEgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
    { name: 'blog.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzYzYjgyYWNhN2E2MzRhN2Y4NmE0OGZhMjZkMjc0ZTVlEgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
    { name: 'careers.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzVmMDljYzg5ODljMDQ4ODY4NzczOGEwNGZmNGJjNjJhEgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
    { name: 'contact.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2NlNTFjYjJjM2JhMTQ5MzRhZTEzOWNkMDhjZTBiZDczEgsSBxCdw_CfgwYYAZIBIwoKcHJvamVjdF9pZBIVQhM0MTg5MDMzMTE0NzE5MTE0Mjky&filename=&opi=89354086' },
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                file.close();
                fs.unlinkSync(dest);
                download(res.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
        }).on('error', (e) => { fs.unlinkSync(dest); reject(e); });
    });
}

async function main() {
    for (const p of pages) {
        const dest = path.join('pages', p.name);
        console.log('Downloading: ' + p.name + '...');
        try {
            await download(p.url, dest);
            const size = fs.statSync(dest).size;
            console.log('  OK - ' + (size / 1024).toFixed(1) + ' KB');
        } catch (e) {
            console.log('  FAILED: ' + e.message);
        }
    }
    console.log('\nAll 7 new final pages downloaded!');
}

main();
