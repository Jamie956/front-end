//read file as stream and pipe to http respond
var http = require("http");
var fs = require("fs");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    fs.createReadStream("./image.jpg").pipe(res);
  })
  .listen(3000, console.log("listen on port 3000."));
