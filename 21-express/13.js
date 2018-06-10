//download file
var express = require("express");
var app = express();
var path = require("path");

var filePath = path.resolve("public/images/mo.jpg");
// app.get("/", (req, res) => res.download(filePath,'hello.jpg'));
app.get("/", (req, res) => res.download(filePath));

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
