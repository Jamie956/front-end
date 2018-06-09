//static file serving
var connect = require("connect");
var app = connect();
var static = require("serve-static");

//http://localhost:3000/foo.js
app.use(static("public")).listen(3000, console.log("LISTEN ON PORT 3000"));
