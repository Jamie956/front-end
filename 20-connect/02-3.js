//absolute path
var connect = require("connect");
var app = connect();
var static = require("serve-static");

//http://localhost:3000/app/files/foo.js
app
  .use("/app/files", static(__dirname + "/public"))
  .listen(3000, console.log("LISTEN ON PORT 3000"));
