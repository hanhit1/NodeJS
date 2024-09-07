const fs = require('fs');
const listfiles = ["file1.json", "file2.json", "file3.json", "file4.json", "file5.json", "file6.json", "file7.json", "file8.json", "file9.json", "file10.json"];
let resultData = ``; 
for ( file of listfiles) {
    let result = '';
    try {
        const data = fs.readFileSync(file);
        const json = JSON.parse(data);
        console.log(json);
        result = 'OK';
    } catch (e) {
        result = 'NOK';
    } finally {
        resultData += file + `\n` + result  + `\n`;
    }
    
 }
 fs.writeFileSync('result.txt', resultData);