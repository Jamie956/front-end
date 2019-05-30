var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(3000, console.log("Listen"));

/**
 * set response header
 * res.setHeader('Content-Length', Buffer.byteLength(body));
 * res.setHeader("Location", "http://www.baidu.com");
 *
 * set response status code
 * res.statusCode = 302;
 *
 * get request hearder
 * req.headers ["access-token"]
 */
