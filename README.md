## package

```
dotenv //env config
```


## node api
```js
//path
const path = require("path");
path.basename("/foo/bar/baz/asdf/quux.html", ".html"); //quux
path.dirname("/foo/bar/baz/asdf/quux"); // /foo/bar/baz/asdf
path.extname("index.html"); //.html
__dirname;//Current Path
path.join(__dirname, "css");
path.join("/foo", "bar", "baz/asdf", "quux", "..");// /foo/bar/baz/asdf
path.join("/foo", "bar", "baz/asdf", "quux");// /foo/bar/baz/asdf/quux
path.parse("C:\\path\\dir\\file.txt");// root, dir, base, ext, name
path.resolve();// Current Path
path.resolve("css");
path.resolve("/foo/bar", "./baz");// /foo/bar/baz
path.resolve("/foo");// /foo


```
