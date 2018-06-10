//use middleware
var express = require("express");
var app = express();

function hi(req, res, next) {
  console.log("say hi");
  next();
}

app.use(hi);

app.get("/", (req, res) => {
  res.send("rs");
});

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
