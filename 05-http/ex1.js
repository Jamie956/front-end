function test01() {
  var http = require("http");
  var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  });

  server.listen(3000, console.log("Listening on port 3000."));
}

test01();
