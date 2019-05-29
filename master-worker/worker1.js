var http = require("http");

// 负责具体业务处理
var port = 8082;
http
  .createServer((req, res) => {
    res.end("8082");
  })
  .listen(port, console.log("Listening on port " + port));
