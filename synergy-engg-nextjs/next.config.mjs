import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Auto-sync external assets on configuration load
const srcImgs = path.join(__dirname, '..', 'imgs');
const srcVideos = path.join(__dirname, '..', 'vedios');
const destImgs = path.join(__dirname, 'public', 'images');
const destVideos = path.join(__dirname, 'public', 'videos');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  try {
    fs.readdirSync(from).forEach(element => {
      const srcPath = path.join(from, element);
      const destPath = path.join(to, element);
      if (fs.lstatSync(srcPath).isFile()) {
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
          console.log(`[Config Auto-Sync] Sync'd: ${element} -> ${to}`);
        }
      }
    });
  } catch (err) {
    console.error('Error auto-syncing assets in next.config.mjs:', err);
  }
}

copyFolderSync(srcImgs, destImgs);
copyFolderSync(srcVideos, destVideos);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
