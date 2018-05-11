var fs = require('fs');
fs.readFile('./resource.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
})