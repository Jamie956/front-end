var http = require("http");

function test01() {
  http
    //创建server
    .createServer((req, res) => {
      //Header: Content-Type
      res.writeHead(200, { "Content-Type": "text/plain" });
      //响应内容
      res.end("Hello World");
    })
    //3000端口监听
    .listen(3000, console.log("Listening on port 3000."));
}

function test02() {
  http
    .createServer((req, res) => {
      var body = "Hello World";
      //Header: Content-Length
      res.setHeader("Content-Length", body.length);
      // res.setHeader('Content-Length', Buffer.byteLength(body));
      res.setHeader("Content-Type", "text/plain");
      res.end(body);
    })
    .listen(3000, console.log("Listening on port 3000."));
}

function test03() {
  http
    .createServer(function(req, res) {
      //Header: Location,重定向到指定页面
      res.setHeader("Location", "http://www.baidu.com");
      res.setHeader("Content-Type", "text/html");
      //设置响应状态
      res.statusCode = 302;
      res.end("");
    })
    .listen(3000, console.log("Listening on port 3000."));
}

function test04() {
  http
    .createServer(function(req, res) {
      var item = "";
      //请求编码
      req.setEncoding("utf8");
      //请求输入流
      req.on("data", chunk => {
        item += chunk;
      });
      req.on("end", () => {
        console.log(item);
        res.end("OK\n");
      });
    })
    .listen(3000, console.log("Listening on port 3000."));
}

function test05() {
  res.header("Access-Control-Expose-Headers", "access-token"); //定义请求头
  req.headers["access-token"]; //获取请求头
  res.header("access-token", now); //设置请求头
  res.sendStatus(401); //设置状态
  req.body; //获取post过来的data
  res.json(true); //返回数据
}
test04();
