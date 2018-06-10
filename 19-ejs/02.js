var ejs = require("ejs");

var tmp = "<%= message %>";
var content = { message: "hi" };

console.log(ejs.render(tmp, content));
