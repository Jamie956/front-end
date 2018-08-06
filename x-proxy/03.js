var http = require("http"),
  httpProxy = require("http-proxy");

//创建代理服务
var proxy = httpProxy.createProxyServer({});

// proxyReq: This event is emitted before the data is sent. It gives you a chance to alter the proxyReq request object. Applies to "web" connections
proxy.on("proxyReq", function(proxyReq, req, res, options) {
  proxyReq.setHeader("X-Special-Proxy-Header", "foobar");
});

proxy.on("proxyRes", function(proxyRes, req, res) {
  console.log(
    "RAW Response from the target",
    JSON.stringify(proxyRes.headers, true, 2)
  );
});

proxy.on("error", function(err, req, res) {
  res.writeHead(500, {
    "Content-Type": "text/plain"
  });
  res.end("Something went wrong. And we are reporting a custom error message.");
});

var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: "http://localhost:8082" });
});

server.listen(3000, console.log("listening on port 3000"));
