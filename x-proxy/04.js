var http = require("http"),
  httpProxy = require("http-proxy");

var apiServer = http.createServer(function(req, res) {
  res.end("api data");
});
apiServer.listen(8082, console.log("listening on port 8082"));

var proxy = httpProxy.createProxyServer();

var pageServer = http.createServer(function(req, res) {
  proxy.web(req, res, { target: "http://localhost:8082" });
});

pageServer.listen(3000, console.log("listening on port 3000"));
