//post form
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("myform");
});

app.post("/upload", (req, res) => {
  console.log(req.body);
  res.end("success");
});

app.listen(3000, console.log("LISTEN ON PORT 3000"));
