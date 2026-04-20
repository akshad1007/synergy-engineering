const fs = require('fs');
const path = require('path');

const dir = 'pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const OLD_LOGO_URL = 'https://lh3.googleusercontent.com/aida/ADBb0ui1hCUuTZAT0yvaf75B3Z-xM9MoYxrF3vCmUMX7Jn0oIMznXDFCLHnoIdIsmnA0_q-bEhBXaLYimN8Rt76SVCNuuhji1lMwjgIiI2ro6ETEMgFtmCVwfY98PynhsfLcBF676VAiBR4m8RfNAI7wq07FUKjezPlgyevaTOnrOfulqjq9wnOEjDlvY-r_4ZNNJkBD8LVTSsD9nNlCiTdwh8Ik_5dtM7EIDkvVeByyhWl53gusCqjVY_XQR8v_eY1-04kdTjOLlZQ1';
const NEW_LOGO_PATH = '../screenshots/logo_synergy.png';

let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace everywhere the old logo was used
    let newContent = content.split(OLD_LOGO_URL).join(NEW_LOGO_PATH);
    
    if (newContent !== content) {
        fs.writeFileSync(path.join(dir, file), newContent);
        count++;
    }
});

console.log(`Successfully replaced logo with local asset across ${count} files.`);
