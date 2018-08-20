var fs = require("fs");
var http = require("http");
var path = require("path");

//读取文件
function test01() {
  fs.readFile("./resource.json", "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
  });
}

//分片读取
function test02() {
  var stream = fs.createReadStream("./resource.json");
  stream.on("data", function(chunk) {
    console.log(chunk);
  });
  stream.on("end", function() {
    console.log("finished");
  });
}

//管道读取
function test03() {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fs.createReadStream("./image.jpg").pipe(res);
    })
    .listen(3000, console.log("listen on port 3000."));
}

// 递归创建目录 异步方法
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

// 递归创建目录 同步方法
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
test05();
