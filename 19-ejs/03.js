var ejs = require("ejs");

var tmp = "<%= message %>";
var content = { message: "<script>alert('XSS attack!');</script>" };

console.log(ejs.render(tmp, content));
