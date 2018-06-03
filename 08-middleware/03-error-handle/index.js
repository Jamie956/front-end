const connect = require("connect");
const errorHandler = require("./errorHandler");
const hi = (req, res, next) => {
  console.log("call hi");
//   foo();
  res.send("hi");
};
const hiagain = (req, res, next) => {
  console.log("call hiagain");
  res.end("hiagain");
};
connect()
  .use(hi)
  .use(hiagain)
  .use(errorHandler())
  .listen(3000, console.log("listen to port 3000"));
