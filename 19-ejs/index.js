var express = require("express");
var app = express();
var path = require('path')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("*", (req, res) => {
    res.render('hello')
});

app.listen(3001,console.log('LISTEN ON PORT 3001'))