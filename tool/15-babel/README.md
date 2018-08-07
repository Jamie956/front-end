npm i -D babel-cli babel-preset-stage-0 babel-preset-es2015

babel index.js //文件babel输出到控制台
babel index.js -o bundle.js //文件babel输出到指定文件
babel index.js -d dist //文件babel输出到指定文件夹
babel src -d dist //文件夹babel输出到指定文件夹
babel src -d dist -s //文件夹babel输出到指定文件夹，和生产map
babel-node index.js //babel转译运行文件