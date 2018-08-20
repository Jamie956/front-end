const path = require("path");

function test01() {
  var rs;
  //获取文件名,去扩展名
  rs = path.basename("/foo/bar/baz/asdf/quux.html", ".html");
  console.log(rs); //quux

  //获取上一级路径
  rs = path.dirname("/foo/bar/baz/asdf/quux");
  console.log(rs); // /foo/bar/baz/asdf

  //获取文件扩展名
  rs = path.extname("index.html");
  console.log(rs); //.html

  //当前路径
  rs = __dirname;
  console.log(rs); // \03-path

  //合并路径
  rs = path.join(__dirname, "css");
  console.log(rs); //03-path\css

  rs = path.join("/foo", "bar", "baz/asdf", "quux", "..");
  console.log(rs); // /foo/bar/baz/asdf

  rs = path.join("/foo", "bar", "baz/asdf", "quux");
  console.log(rs); // /foo/bar/baz/asdf/quux

  //转化为抽象路径
  rs = path.parse("C:\\path\\dir\\file.txt");
  console.log(rs);

  //当前路径
  rs = path.resolve();
  console.log(rs); // /home/jamie/project/nodejs/03-path

  //合并路径
  rs = path.resolve("css");
  console.log(rs); // /home/jamie/project/nodejs/03-path/css

  //合并路径
  rs = path.resolve("/foo/bar", "./baz");
  console.log(rs); // /foo/bar/baz

  //合并路径
  rs = path.resolve("/foo");
  console.log(rs); // /foo
}

test01();
