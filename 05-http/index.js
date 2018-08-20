var http = require("http");

function test01() {
  //创建server,3000端口监听
  http
    .createServer((req, res) => {
      //设置响应头Content-Type
      res.writeHead(200, { "Content-Type": "text/plain" });
      //响应内容
      res.end("Hello World");
    })
    .listen(3000, console.log("Listening on port 3000."));
}

function test02() {
  http
    .createServer((req, res) => {
      var body = "Hello World";
      //根据body.length,设置响应头Content-Length
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
      //设置响应头Location,能使页面发生重定向
      res.setHeader("Location", "http://www.baidu.com");
      res.setHeader("Content-Type", "text/html");
      //设置响应状态
      res.statusCode = 302;
      res.end("");
    })
    .listen(3000, console.log("Listening on port 3000."));
}

function test04() {
  var items = [];
  http
    .createServer(function(req, res) {
      switch (req.method) {
        case "POST":
          var item = "";
          req.setEncoding("utf8");
          //分片读取post过来的数据
          req.on("data", function(chunk) {
            item += chunk;
          });
          req.on("end", function() {
            items.push(item);
            res.end("OK\n");
          });
          break;
      }
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
