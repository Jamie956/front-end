const hello = (req, res, next) => {
  if (req.url.match(/^\/hello/)) {
    res.end("hello world");
  } else {
    next();
  }
};
module.exports = hello;
