//set Content-Length
var http = require("http");
var server = http.createServer((req, res) => {
  var body = "Hello World";
  res.setHeader("Content-Length", body.length);
  // res.setHeader('Content-Length', Buffer.byteLength(body));
  res.setHeader("Content-Type", "text/plain");
  res.end(body);
});

server.listen(3000, console.log("LISTEN ON PORT 3000."));
