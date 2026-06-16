const fs = require('fs');
const path = require('path');

const srcImgs = path.join(__dirname, '..', 'imgs');
const srcVideos = path.join(__dirname, '..', 'vedios');
const destImgs = path.join(__dirname, 'public', 'images');
const destVideos = path.join(__dirname, 'public', 'videos');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) {
    console.log(`[Asset Copier] Source folder does not exist: ${from}`);
    return;
  }
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
    console.log(`[Asset Copier] Created destination folder: ${to}`);
  }
  
  try {
    const files = fs.readdirSync(from);
    files.forEach(element => {
      const srcPath = path.join(from, element);
      const destPath = path.join(to, element);
      if (fs.lstatSync(srcPath).isFile()) {
        // Only copy if file doesn't exist or size is different/newer
        let shouldCopy = true;
        if (fs.existsSync(destPath)) {
          const srcStat = fs.statSync(srcPath);
          const destStat = fs.statSync(destPath);
          if (srcStat.size === destStat.size && srcStat.mtimeMs <= destStat.mtimeMs) {
            shouldCopy = false;
          }
        }
        
        if (shouldCopy) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`[Asset Copier] Copied: ${element} -> ${to}`);
        }
      }
    });
  } catch (err) {
    console.error(`[Asset Copier] Error copying files from ${from} to ${to}:`, err);
  }
}

console.log('[Asset Copier] Starting synchronization of external assets...');
copyFolderSync(srcImgs, destImgs);
copyFolderSync(srcVideos, destVideos);
console.log('[Asset Copier] Asset synchronization completed.');
