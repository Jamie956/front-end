

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

## NPM
```js
npm -v //version
npm config list //node config
npm root //node_modules root path
npm root -g

npm i <module> //安装最新模块
npm i //安装package.json里的模块
npm i -g <module> //全局安装模块
npm i -S <module> //安装模块到dependencies
npm i -D <lib> //安装模块到dev-dependencies
npm remove <module> //移除模块
npm update <module> //更新模块
npm view <module> //查看模块信息
npm view <module> versions //历史版本

npm init //生成package.json
npm init -y //生成package.json并设置默认值

npm run <script> //运行package.json里scripts定义好的命令

npm install -g npm-check-updates //更新全部依赖包
ncu -u //检查全部依赖包
```