const fileNames = [
    'Gooup1_User_Tracking_121220230405.txt',
    'Gooup1_User_Tracking_290220230405.txt',
    'Gooup1_User_Tracking_29022023040506.txt',
    'Gooup1_User_Tracking_290220230450.txt',
    'Gooup1_User_Tracking_290220234050.txt',
    'Gooup1_User_Tracking_290220234050.txt',
    'Gooup1_User_Tracking_290020232323.txt',
    'Gooup1_UserTracking_290020232323.txt',
    'Gooup1_User_Tracking_291220232323.txts',
  
  ]
  const folderNames = "my-data";
    const fs = require('fs');
    fileNames.forEach(fileName => {
        fs.writeFileSync(folderNames + '/' + fileName,fileName);
    });
    const checkFile = (fileName) => {
        const regex = /^Gooup1_User_Tracking_(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{4})(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]\.txt$/;
        const match = fileName.match(regex);
        if (!match) return false;
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);
        if (month === 2) { 
            if (day > 29) return false; 
            if (day === 29 && (!(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) return false; 
        } else if ([4, 6, 9, 11].includes(month)) {
            if (day > 30) return false;
        }
        return true;
    };
    fs.readdir(folderNames, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                if (checkFile(file)) {
                    let data = fs.readFileSync(folderNames + '/' + file);
                    data = data + ' - OK';
                    fs.writeFileSync(folderNames + '/' + file, data);
                }
            });
        }
    });