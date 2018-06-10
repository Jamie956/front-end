//express static
var express = require("express");
var app = express();

//http://localhost:3000/images/mo.jpg
//http://localhost:3000/javascripts/foo.js
//http://localhost:3000/stylesheets/bar.css
app.use("/", express.static("public"));

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
