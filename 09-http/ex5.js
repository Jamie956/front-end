//set statusCode
var http = require("http");
var server = http.createServer(function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 302;
  res.end("hi");
});

server.listen(3000, console.log("LISTEN ON PORT 3000."));
