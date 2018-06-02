const connect = require("connect");
const app = connect();

const logger = (req, res, next) => {
  console.log("%s %s", req.method, req.url);
  next();
};
app.use(logger);

const hello = (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world");
};
app.use(hello);

app.listen(3000, console.log("listen on port 3000"));
