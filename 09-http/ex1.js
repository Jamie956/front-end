//simple example
var http = require("http");
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(3000, console.log("LISTEN ON PORT 3000."));
