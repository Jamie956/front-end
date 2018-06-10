//ajax post form
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("postForm");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
