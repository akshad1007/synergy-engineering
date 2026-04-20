const fs = require('fs');
const path = require('path');

const root = process.cwd();
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.toLowerCase().endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);

const summary = {
    totalFiles: htmlFiles.length,
    hardcodedWidthsRoot: 0,
    wScreenIssues: 0,
    missingOverflowHidden: 0,
    potentiallySmallTapTargets: 0,
    nonResponsiveGrids: 0
};
const findings = [];

for (const file of htmlFiles) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const c = fs.readFileSync(file, 'utf8');

    // 1. Hardcoded large widths: w-[500px], min-w-[600px] that might break mobile
    const hardcodedWidths = [...c.matchAll(/class="[^"]*\b([w|min-w]-\[[4-9]\d\dpx\])[^"]*"/g)];
    if (hardcodedWidths.length > 0) {
        summary.hardcodedWidthsRoot += hardcodedWidths.length;
        findings.push({ file: rel, type: 'Hardcoded Large Width', details: hardcodedWidths.map(m => m[1]).join(', ') });
    }

    // 2. w-screen issues (often causes horizontal scrollbar)
    const wScreen = [...c.matchAll(/class="[^"]*\bw-screen\b[^"]*"/g)];
    if (wScreen.length > 0) {
        summary.wScreenIssues += wScreen.length;
        findings.push({ file: rel, type: 'w-screen usage (scroll risk)', details: wScreen.length + ' instances' });
    }

    // 3. Grids that don't have responsive prefixes (e.g. grid-cols-2 without md:grid-cols-2)
    // Often breaks on mobile if grid-cols-3 is set for all sizes.
    const strictGrids = [...c.matchAll(/class="[^"]*\b(grid-cols-[2-9]|grid-cols-1[0-2])\b[^"]*"/g)];
    for(const m of strictGrids) {
        if(!/(sm:|md:|lg:|xl:)\s*grid-cols-/.test(m[0])) {
            summary.nonResponsiveGrids++;
            findings.push({ file: rel, type: 'Non-responsive Grid (forces multi-column on mobile)', details: m[1] });
        }
    }

    // 4. Checking body/main for overflow-x-hidden (good practice to prevent horizontal wiggle)
    if (!/<body[^>]*overflow-x-hidden/.test(c) && !/<main[^>]*overflow-x-hidden/.test(c)) {
        summary.missingOverflowHidden++;
    }
}

console.log(JSON.stringify({summary, sampleFindings: findings.slice(0, 15)}, null, 2));
