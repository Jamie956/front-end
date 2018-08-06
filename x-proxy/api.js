var http = require("http");

var server = http.createServer(function(req, res) {
  console.log("req");
  res.end("api data");
});

server.listen(8082, console.log("listening on port 8082"));
