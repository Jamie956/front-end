const path = require("path");

function test01() {
  var rs;

  //当前路径
  rs = __dirname;
  console.log(rs); // /home/jamie/project/nodejs/03-path/src

  //合并路径
  rs = path.join(__dirname, "css");
  console.log(rs); // /home/jamie/project/nodejs/03-path/src/css

  //当前路径
  rs = path.resolve();
  console.log(rs); // /home/jamie/project/nodejs/03-path/src

  //合并路径
  rs = path.resolve("css");
  console.log(rs); // /home/jamie/project/nodejs/03-path/src/css
}

test01();
