var cp = require("child_process");
var n = cp.fork("./child.js");

n.on("message", m => console.log(m));
n.send("1");