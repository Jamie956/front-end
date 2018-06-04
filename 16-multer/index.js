const express = require("express");
const app = express();
app.use(express.static("./public"));
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve("images"));
  },
  filename: function(req, file, cb) {
    cb(null, "hi" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("avatar"), (req, res) => {
  res.end("ok");
});
app.listen(3000, console.log("listen on port 3000"));
