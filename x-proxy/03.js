var http = require("http"),
  httpProxy = require("http-proxy");

//创建代理服务
var proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: "http://localhost:8082" });
});

server.listen(3000, console.log("listening on port 3000"));
