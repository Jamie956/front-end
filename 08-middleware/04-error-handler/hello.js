const hello = (req, res, next) => {
  //http://localhost:3000/hello
  if (req.url.match(/^\/hello/)) {
    res.end("hello world");
  } else {
    next();
  }
};
module.exports = hello;
