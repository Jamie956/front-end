var http = require("http");

var port = Math.round((1 + Math.random()) * 1000);
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(port, console.log("Listening on port " + port));
