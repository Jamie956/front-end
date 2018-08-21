const express = require("express");
const app = express();
const path = require("path");
const { upload } = require("./helper");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

//single upload
app.post("/single", upload.single("logo"), (req, res, next) => {
  console.log(req.file);
  if (req.file) {
    res.end("ok");
  } else {
    res.end("fail");
  }
});

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 2 }])
app.post("/multi", cpUpload, (req, res, next) => {
  console.log(req.files);
  if (req.files) {
    res.end("ok");
  } else {
    res.end("fail");
  }
});

app.listen(3000, console.log("LISTEN ON PORT 3000."));
