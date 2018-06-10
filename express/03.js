//exposing data to views
var express = require("express");
var app = express();
var path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("hello", "this is hello");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, console.log("LISTEN ON PORT 3000"));
