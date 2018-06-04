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

  //   destination: path.resolve("images"), //auto create dir

  destination: path.resolve("/images"), //auto create dir
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + md5(file) + path.extname(file.originalname)
    );
  }
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("logo"), (req, res, next) => {
  console.log(req.file);
  if (req.file) {
    res.end("ok");
  } else {
    res.end("fail");
  }
});
app.listen(3000, console.log("listen on port 3000"));
