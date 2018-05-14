//======================
//read file as utf8
// var fs = require('fs');
// fs.readFile('./resource.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// })

//======================
//read file as stream
// var fs = require('fs');
// var stream = fs.createReadStream('./resource.json')
// stream.on('data', function (chunk) {
//     console.log(chunk)
// })
// stream.on('end', function () {
//     console.log('finished')
// })

//======================
//read file as stream and pipe to http respon
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    fs.createReadStream('./image.jpg').pipe(res);
}).listen(3000);