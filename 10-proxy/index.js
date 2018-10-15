var http = require("http");
var httpProxy = require("http-proxy");

function test01() {
  //开放3000端口httpProxy服务，当访问3000时，代理访问9000端口
  httpProxy
    .createProxyServer({ target: "http://localhost:9000" })
    .listen(3000, console.log("Proxy server listening on port 3000"));

  //api在9000端口监听
  http
    .createServer(function(req, res) {
      res.end("api data");
    })
    .listen(9000, console.log("API server listening on port 9000"));
}

function test02() {
  //创建代理服务
  var proxy = httpProxy.createProxyServer({});

  //3000端口http服务，代理端口8082的服务
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
}

function test03() {
  //创建代理服务
  var proxy = httpProxy.createProxyServer({});

  // 代理服务请求前触发
  proxy.on("proxyReq", function(proxyReq, req, res, options) {
    console.log("proxyReq");
    //设置代理请求头
    proxyReq.setHeader("X-Special-Proxy-Header", "foobar");
  });

  // 代理服务响应时触发
  proxy.on("proxyRes", function(proxyRes, req, res) {
    console.log("proxyRes");
  });

  // 代理服务发生错误时触发
  proxy.on("error", function(err, req, res) {
    res.writeHead(500, {
      "Content-Type": "text/plain"
    });
    res.end("Something went wrong.");
  });

  //3000端口的服务，代理端口8082的服务
  http
    .createServer(function(req, res) {
      console.log("3000 req");
      proxy.web(req, res, { target: "http://localhost:8082" });
    })
    .listen(3000, console.log("listening on port 3000"));

  //api服务，端口为8082
  http
    .createServer(function(req, res) {
      console.log("8082 req");
      res.end("api data");
    })
    .listen(8082, console.log("API server listening on port 8082"));
}

test03();
