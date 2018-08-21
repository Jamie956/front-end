var express = require("express");
var app = express();
var path = require("path");

//定义views路径
app.set("views", path.join(__dirname, "views"));
//设置views的模板引擎
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("home", { msg: "hi" });
});

app.listen(3000, console.log("Listening on port 3000"));
