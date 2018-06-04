const express = require("express");
const app = express();
app.use(express.static("./public"));
const path = require("path");
const multer = require("multer");
const md5 = require("md5");

const storage = multer.diskStorage({
  //   destination: function(req, file, cb) {
  //     cb(null, path.resolve("images"));
  //   },
  destination: path.resolve("images"),
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + md5(file) + path.extname(file.originalname)
    );
  }
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("logo"), (req, res, next) => {
  res.end("ok");
});
app.listen(3000, console.log("listen on port 3000"));
