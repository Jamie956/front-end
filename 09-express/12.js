//send file
var express = require("express");
var app = express();
var path = require("path");

var filePath = path.resolve("public/hello.txt");
app.get("/", (req, res) => res.sendFile(filePath));

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
