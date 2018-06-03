const connect = require("connect");
const app = connect();

const hello = (req, res, next) => {
  res.end("hi");
};

const setup = data => {
  console.log(data);
  return (req, res, next) => {
    console.log("return");
    next();
  };
};

app.use(setup("oops")).use(hello);

app.listen(3000, console.log("listen on port 3000"));
