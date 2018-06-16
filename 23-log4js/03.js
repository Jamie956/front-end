const express = require('express')
var app = express();
const log4js = require("./log-config");
const logger = log4js.getLogger(); //根据需要获取logger
const errlogger = log4js.getLogger("err");
const othlogger = log4js.getLogger("oth");

//结合express使用，记录请求日志
// app = express();
log4js.useLogger(app, logger); //这样会自动记录每次请求信息，放在其他use上面
//手动记录，可以代替console.log
logger.info("test info 1");
errlogger.err("test error 1");
othlogger.info("test info 2");
