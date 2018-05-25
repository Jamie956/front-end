//set header
var http = require('http');
var server = http.createServer(function (req, res) {
    var body = 'Hello World';
    res.setHeader('Content-Length', body.length);//set header
    // res.setHeader('Content-Length', Buffer.byteLength(body));
    res.setHeader('Content-Type', 'text/plain');
    res.end(body)
});
server.listen(3000, function(){ console.log('listen on port 3000.') });