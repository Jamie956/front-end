preset 预置条件

### babel-cli 命令
```
babel index.js //文件babel输出到控制台
babel index.js -o bundle.js //文件babel输出到指定文件
babel index.js -d dist //文件babel输出到指定文件夹
babel src -d dist //文件夹babel输出到指定文件夹
babel src -d dist -s //文件夹babel输出到指定文件夹，和生产map
babel-node index.js //babel转译运行文件
```

### babelrc配置
```
{
  "plugins": ["transform-react-jsx"],
  "ignore": [
    "foo.js",
    "bar/**/*.js"
  ]
}

```

### 概念
```
babel-core //核心包，babel编译器
babel-cli //提供命令行运行 babel
babel-external-helpers
babel-node //node环境支持jsx
babel-register //实时编译，不需要输出文件，执行的时候再去编译。适用于开发
babel-runtime
babel-polyfill //模拟一个完整的ES2015 +环境
transform-runtime

```