const fs = require('fs');

const filePath = 'package.json';
let content = fs.readFileSync(filePath, 'utf8');

// Remove BOM if it exists
if (content.charCodeAt(0) === 0xFEFF) {
  content = content.slice(1);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ BOM removed from package.json');
} else {
  console.log('ℹ️ No BOM found. File is clean.');
}
