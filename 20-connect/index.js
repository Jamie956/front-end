//error handler just for dev
var connect = require("connect");

function hi(req, res, next) {
  console.log("hi");
  next();
}

function someErr(req, res, next) {
  console.log("someErr");
  setTimeout(() => {
    next(new Error("some err"));
  }, 2000);
}

connect()
  .use(hi)
  .use(someErr)
  .listen(3000, console.log("LISTEN ON PORT 3000"));
