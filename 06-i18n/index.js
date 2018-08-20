var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var i18n = require("i18n");
var app = express();

i18n.configure({
  locales: ["en", "de", "ar", "zh"],
  cookie: "lang",
  directory: __dirname + "/locales",
  autoReload: true //reload auto
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(i18n.init);

app.get("/en", function(req, res) {
  res.cookie("lang", "en", {
    expires: new Date(Date.now() + 900000),
    httpOnly: false
  });
  res.render("index");
});

app.get("/zh", function(req, res) {
  res.cookie("lang", "zh", {
    expires: new Date(Date.now() + 900000),
    httpOnly: false
  });
  res.render("index");
});

app.listen(3000, console.log("listening on port 3000"));
