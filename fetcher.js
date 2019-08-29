const args = process.argv.slice(2);
let website = args[0];
let targetFile = args[1];
const fs = require('fs');
const request = require('request');


request(website, (error, response, body) => {
    fs.writeFile(targetFile, body, function (err) {
        if (err) throw err;
    });
    console.log("Downloaded and saved " + body.length + " bytes to " + targetFile);
});
