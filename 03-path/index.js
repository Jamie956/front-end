const path = require("path");

//quux
path.basename("/foo/bar/baz/asdf/quux.html", ".html");

// /foo/bar/baz/asdf
path.dirname("/foo/bar/baz/asdf/quux");

//.html
path.extname("index.html");

//D:\project\thinkNodejs\03-path
__dirname;

//D:\project\thinkNodejs\03-path\css
path.join(__dirname, "css");

// \foo\bar\baz\asdf
path.join("/foo", "bar", "baz/asdf", "quux", "..");

// \foo\bar\baz\asdf\quux
path.join("/foo", "bar", "baz/asdf", "quux")

//[object Object]
path.parse("C:\\path\\dir\\file.txt");

//D:\project\thinkNodejs\03-path
path.resolve();

//D:\project\thinkNodejs\03-path\css
path.resolve("css");

//D:\foo\bar\baz
path.resolve("/foo/bar", "./baz");

//D:\foo
path.resolve("/foo");

