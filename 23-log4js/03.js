const express = require("express");
var app = express();
const log4js = require("./log-config");
const logger = log4js.getLogger();
const errlogger = log4js.getLogger("err");
const othlogger = log4js.getLogger("oth");

log4js.useLogger(app, logger);

app.get("/", (req, res) => {
  logger.trace("logger tr");
  logger.debug("logger de");
  logger.info("logger in");
  logger.warn("logger wa");
  logger.error("logger er");
  logger.fatal("logger fa");

  errlogger.trace("errlogger tr");
  errlogger.debug("errlogger de");
  errlogger.info("errlogger in");
  errlogger.warn("errlogger wa");
  errlogger.error("errlogger er");
  errlogger.fatal("errlogger fa");

  othlogger.trace("othlogger tr");
  othlogger.debug("othlogger de");
  othlogger.info("othlogger in");
  othlogger.warn("othlogger wa");
  othlogger.error("othlogger er");
  othlogger.fatal("othlogger fa");

  res.send("hi");
});
app.listen(3000, console.log("listen on port 3000"));
