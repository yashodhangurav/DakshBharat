const fs = require('fs');
let path = 'init/data.js';
let data = fs.readFileSync(path, 'utf8');
data = data.replace(/category: "Service",([\s\S]*?)status: "Open"/g, 'category: "Service",$1status: "Available"');
fs.writeFileSync(path, data);
console.log('Seed data successfully updated with new Available status for Services.');
