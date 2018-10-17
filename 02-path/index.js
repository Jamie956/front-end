const path = require("path");

function test01() {
  var rs;
  //获取basename，即去除扩展名
  rs = path.basename("/foo/bar/baz/asdf/quux.html", ".html");
  console.log('1 '+rs); //quux

  //获取上一级目录
  rs = path.dirname("/foo/bar/baz/asdf/quux");
  console.log('2 '+rs); // /foo/bar/baz/asdf

  //获取文件扩展名
  rs = path.extname("index.html");
  console.log('3 '+rs); //.html

  //当前路径
  rs = __dirname;
  console.log('4 '+rs); // /home/jamie/project/nodejs/02-path

  //合并路径
  rs = path.join(__dirname, "css");
  console.log('5 '+rs); // /home/jamie/project/nodejs/02-path/css

  rs = path.join("/foo", "bar", "baz/asdf", "quux", "..");
  console.log('6 '+rs); // /foo/bar/baz/asdf

  rs = path.join("/foo", "bar", "baz/asdf", "quux");
  console.log('7 '+rs); // /foo/bar/baz/asdf/quux

  //转化为抽象路径
  rs = path.parse("C:\\path\\dir\\file.txt");
  console.log(rs);// root, dir, base, ext, name

  //当前路径
  rs = path.resolve();
  console.log('9 '+rs); // /home/jamie/project/nodejs/02-path

  //当前路径与参数合并
  rs = path.resolve("css");
  console.log('10 '+rs); // /home/jamie/project/nodejs/02-path/css

  //合并指定路径
  rs = path.resolve("/foo/bar", "./baz");
  console.log('11 '+rs); // /foo/bar/baz

  rs = path.resolve("/foo");
  console.log('12 '+rs); // /foo
}

test01();
