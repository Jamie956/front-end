// var fs = require("fs"),
//   gm = require("gm");
var fs = require("fs"),
  gm = require("gm").subClass({ imageMagick: true });

const path = require("path");
gm(path.resolve("tmp.jpg"))
  .resize(24, 24, "!")
  .noProfile()
  .write(path.resolve("resize.jpg"), function(err) {
    if (!err) console.log("done");
  });
