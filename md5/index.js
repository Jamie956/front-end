var path = require("path");
var md5 = require("md5");

var ax = path.parse("./cake.jpg");

console.log(ax);

var rs = md5(ax);

console.log(rs);
