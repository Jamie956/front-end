var fs = require("fs");
var http = require("http");
var path = require("path");

//Read File
function test01() {
  fs.readFile("./resource.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

//Read Stream
function test02() {
  fs.createReadStream("./resource.json", { encoding: "utf8" })
    .on("data", chunk => {
      console.log(chunk);
    })
    .on("end", () => {
      console.log("done");
    });
}

//Stream Pipe
function test03() {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fs.createReadStream("./image.jpg").pipe(res);
    })
    .listen(3000, console.log("listen on port 3000."));
}

//递归创建目录 异步方法 fs.mkdir()
function test04() {
  function mkdirs(dirname, callback) {
    fs.exists(dirname, function(exists) {
      if (exists) {
        callback();
      } else {
        mkdirs(path.dirname(dirname), function() {
          fs.mkdir(dirname, callback);
        });
      }
    });
  }
  mkdirs("hello/a/b/c", () => {
    console.log("done");
  });
}

//递归创建目录 同步方法 fs.mkdirSync()
function test05() {
  function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
      return true;
    } else {
      if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
      }
    }
  }
  mkdirsSync("hello/a/b/c");
}

test03();
