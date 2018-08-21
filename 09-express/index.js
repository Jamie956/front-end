var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

//最简单例子
function test01() {
  app.get("/", (req, res) => res.send("Hello World~"));
  // app.listen(3000, () => console.log("Listening on port 3000"));
  app.listen(3000, console.log("Listening on port 3000"));
}

//使用模板引擎ejs
function test02() {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("index", { title: "mimi" });
  });

  app.listen(3000, console.log("Listening on port 3000"));
}

//定义set的值,ejs可获取
function test03() {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.set("hello", "this is hello");

  app.get("/", (req, res) => {
    res.render("home");
  });

  app.listen(3000, console.log("Listening on port 3000"));
}

//定义app.locals的值,ejs可获取
function test04() {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.locals.email = "1@email.com";

  app.get("/", (req, res) => {
    res.render("about");
  });
  app.listen(3000, console.log("Listening on port 3000"));
}

//表单提交
function test05() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("myform");
  });

  app.post("/upload", (req, res) => {
    console.log(req.body);
    res.end("success");
  });
  app.listen(3000, console.log("Listening on port 3000"));
}

//访问静态资源
//http://localhost:3000/javascripts/foo.js
function test06() {
  app.use("/", express.static("public"));
  app.listen(3000, console.log("Listening on port 3000"));
}

//解析cookies
function test07() {
  app.use(cookieParser());

  app.get("/get", (req, res) => {
    res.send(req.cookies);
  });

  app.get("/", (req, res) => {
    res.cookie("name", "tom", {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    });
    res.end("ok");
  });
  app.listen(3000, console.log("Listening on port 3000"));
}

//各种请求
function test08() {
  app.get("/", (req, res) => res.send("Got a GET request at /"));
  app.post("/", (req, res) => res.send("Got a POST request at /"));
  app.put("/user", (req, res) => res.send("Got a PUT request at /user"));
  app.delete("/user", (req, res) => res.send("Got a DELETE request at /user"));

  //localhost:3000/secret
  app.all("/secret", function(req, res, next) {
    console.log("Accessing the secret section ...");
    next();
  });

  //localhost:3000/users/34/books/8989
  app.get("/users/:userId/books/:bookId", function(req, res) {
    res.send(req.params);
  });

  //localhost:3000/flights/LAX-SFO
  app.get("/flights/:from-:to", function(req, res) {
    res.send(req.params);
  });
  app.listen(3000, console.log("Listening on port 3000"));
}

//使用中间件
function test09() {
  function logger(req, res, next) {
    console.log("This is logger");
    next();
  }
  app.use(logger);

  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.listen(3000, console.log("Listening on port 3000"));
}

//ajax 提交表单
function test10() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("postForm");
  });

  app.post("/login", (req, res) => {
    console.log(req.body);
    res.json({ success: true });
  });
  app.listen(3000, console.log("Listening on port 3000"));
}

//路由
function test11() {
  var rootRouter = express.Router();
  var apiRouter = express.Router();
  var pageRouter = express.Router();

  function auth(req, res, next) {
    console.log("auth");
    next();
  }

  apiRouter.get("/api", (req, res) => {
    res.end("Welcome API");
  });
  apiRouter.get("/api/user", (req, res) => {
    res.end("User API");
  });
  pageRouter.get("/", (req, res) => {
    res.end("Wow, it's Home");
  });

  app.use(rootRouter);
  rootRouter.use(pageRouter);
  rootRouter.use(auth, apiRouter);

  app.listen(3000, console.log("Listening on port 3000"));
}

//发送文件
function test12() {
  var filePath = path.resolve("public/hello.txt");
  app.get("/", (req, res) => res.sendFile(filePath));

  app.listen(3000, console.log("Listening on port 3000"));
}

//下载文件
function test13() {
  var filePath = path.resolve("public/images/mo.jpg");
  //给下载文件重命名
  app.get("/", (req, res) => res.download(filePath, "hello.jpg"));
  // app.get("/", (req, res) => res.download(filePath));

  app.listen(3000, console.log("Listening on port 3000"));
}

test13();
