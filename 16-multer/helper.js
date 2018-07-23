const multer = require("multer");
const fs = require("fs");
const path = require("path");

function createDir(dir) {
  fs.existsSync(dir) || fs.mkdirSync(dir);
}

function newFileName(file) {
  return file.fieldname + path.extname(file.originalname);
}
const destDir = path.resolve("public/images");
createDir(destDir);

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

module.exports = { upload };
