const connect = require("connect");

const hi = (req, res, next) => {
  res.setHeader("Set-Cookie", "foo=bar");
  res.setHeader("Set-Cookie", "tobi=ferret;Expires=12222");
  res.end("hi");
};
connect()
  .use(hi)
  .listen(3000, console.log("listen on port 3000"));
