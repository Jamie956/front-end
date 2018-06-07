var express = require("express");
var app = express();
var path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("home", { msg: "hi" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3001, console.log("LISTEN ON PORT 3001"));
