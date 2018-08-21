var ejs = require("ejs");
var fs = require("fs");

//把数据渲染到指定ejs模板
function test01() {
  var template = fs.readFileSync("./views/home.ejs", "utf8");
  console.log(ejs.render(template, { msg: "aooo" }));
}

//把数据渲染到字符串模板
function test02() {
  var template = "<%= message %>";
  var content = { message: "hi" };
  console.log(ejs.render(template, content));
}

//标签转义
function test03() {
  var tmp = "<%= message %>";
  var content = { message: "<script>alert('XSS attack!');</script>" };
  console.log(ejs.render(tmp, content));
}

//标签不转义
function test04() {
  var tmp = "<%- message %>";
  var content = { message: "<script>alert('XSS attack!');</script>" };
  console.log(ejs.render(tmp, content));
}

test04();
