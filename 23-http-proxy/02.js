var http = require("http"),
  httpProxy = require("http-proxy");

//创建代理服务
var proxy = httpProxy.createProxyServer({});

//3000端口的服务，代理端口8082的服务
http
  .createServer(function(req, res) {
    proxy.web(req, res, { target: "http://localhost:8082" });
  })
  .listen(3000, console.log("listening on port 3000"));

//api服务，端口为8082
http
  .createServer(function(req, res) {
    res.end("api data");
  })
  .listen(8082, console.log("API server listening on port 8082"));
