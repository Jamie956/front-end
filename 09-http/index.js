// var http = require('http');
// var server = http.createServer(function (req, res) {
//     res.end('Hello World');
// });
// server.listen(3000, '127.0.0.1');

//=======================

// var http = require('http');
// var server = http.createServer(function (req, res) {
//     var body = 'Hello World';
//     res.setHeader('Content-Length', body.length);//set header
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(body)
// });
// server.listen(3000, '127.0.0.1');

//=======================

// var http = require('http');
// var server = http.createServer(function (req, res) {
//     var url = 'http://baidu.com';
//     var body = '<p>Redirecting to <a href="' + url + '">'
//         + url + '</a></p>';
//     res.setHeader('Location', url);//set redirecting url
//     res.setHeader('Content-Length', body.length);
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = 302;
//     res.end(body);
// });
// server.listen(3000, '127.0.0.1');

//=======================

// var http = require('http');
// var url = require('url');
// var items = [];
// var server = http.createServer(function (req, res) {
//     switch (req.method) {
//         case 'POST':
//             var item = '';
//             req.setEncoding('utf8');
//             req.on('data', function (chunk) {
//                 item += chunk;
//             });
//             req.on('end', function () {
//                 items.push(item);
//                 res.end('OK\n');
//             });
//             break;
//     }
// });

//=======================

// var http = require('http');
// var items = ['a','b'];
// var server = http.createServer(function (req, res) {
//     switch (req.method) {
//         case 'GET':
//             items.forEach(function (item, i) {
//                 res.write(i + ') ' + item + '\n');
//             });
//             res.end();
//             break;
//     }
// });

//=======================

// var body = items.map(function (item, i) {
//     return i + ') ' + item;
// }).join('\n');
// res.setHeader('Content-Length', Buffer.byteLength(body));/** */
// res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
// res.end(body);

//=======================
// switch () {
//     case 'DELETE':
//         var path = url.parse(req.url).pathname;
//         var i = parseInt(path.slice(1), 10);
//         if (isNaN(i)) {
//             res.statusCode = 400;
//             res.end('Invalid item id');
//         } else if (!items[i]) {
//             res.statusCode = 404;
//             res.end('Item not found');
//         } else {
//             items.splice(i, 1);
//             res.end('OK\n');
//         }
//         break;
// }