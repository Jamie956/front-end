const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const fs = require("fs");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

function createDir(dir) {
  fs.existsSync(dir) || fs.mkdirSync(dir);
}

function newFileName(file) {
  return file.fieldname + path.extname(file.originalname);
}
const destDir = path.resolve("public/images")
createDir(destDir)

const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, destDir);
    },
    filename: function(req, file, cb) {
      cb(null, newFileName(file));
    }
  }),
  limits: { fileSize: 2 * 1024 * 1024 } //2M
});

//multi upload
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 2 }])
app.post("/upload", cpUpload, (req, res, next) => {
  console.log(req.files);
  if (req.files) {
    res.end("ok");
  } else {
    res.end("fail");
  }
});

app.listen(3000, console.log("LISTEN ON PORT 3000."));
