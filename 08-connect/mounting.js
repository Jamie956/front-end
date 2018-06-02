const connect = require("connect");

const logger = (req, res, next) => {
  console.log("%s %s", req.method, req.url);
  next();
};

const hello = (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world");
};

const admin = (req, res, next) => {
  console.log("admin");
  next();
};
const restrict = (req, res, next) => {
  console.log("restrict");
  let isAuth = false;
  if (isAuth) {
    next();
  } else {
    next(new Error("failure to auth"));
  }
};
const app = connect()
  .use(logger)
  .use("/admin", restrict)
  .use("/admin", admin)
  .use(hello);

app.listen(3000, console.log("listen on port 3000"));
