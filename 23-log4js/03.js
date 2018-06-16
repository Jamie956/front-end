const express = require("express");
var app = express();
const log4js = require("./log-config");
const logger = log4js.getLogger();
const errlogger = log4js.getLogger("err");
const othlogger = log4js.getLogger("oth");

log4js.useLogger(app, logger);

app.get("/", (req, res) => {
  logger.info("test info 1");
//   errlogger.err("test error 1");
  othlogger.info("test info 2");
  res.send("hi");
});
app.listen(3000, console.log("listen on port 3000"));
