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

//递归创建目录 异步方法
function test04() {
  function mkdirs(dir, cb) {
    //文件夹是否存在
    fs.exists(dir, exists => {
      if (exists) {
        cb();
      } else {
        //递归
        mkdirs(path.dirname(dir), () => {
          //创建文件夹
          fs.mkdir(dir, cb);
        });
      }
    });
  }
  mkdirs("hello/a/b/c", () => {
    console.log("done");
  });
}

//递归创建目录 同步方法
function test05() {
  function mkdirs(dir) {
    if (fs.existsSync(dir)) {
      return true;
    } else {
      if (mkdirs(path.dirname(dir))) {
        fs.mkdirSync(dir);
        return true;
      }
    }
  }
  mkdirs("hello/a/b/c");
}

test05();
