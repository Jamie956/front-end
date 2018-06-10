var path = require("path");
var md5 = require("md5");

var ax = path.parse("D:osdeepin-15.5-amd64.iso");

console.log(ax);

var rs = md5(ax);

console.log(rs);
