var http = require("http");
var httpProxy = require("http-proxy");

//8000端口的服务，当访问8000时，代理访问9000端口
httpProxy
  .createProxyServer({ target: "http://localhost:9000" })
  .listen(8000, console.log("Proxy server listening on port 8000"));

//api
http
  .createServer(function(req, res) {
    res.end("api data");
  })
  .listen(9000, console.log("API server listening on port 9000"));
