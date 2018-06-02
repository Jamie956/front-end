const connect = require("connect");
const app = connect();
app.listen(3000, console.log("listen on port 3000"));

const logger = (req, res, next) => {
  console.log("%s %s", req.method, req.url);
  next();
};

app.use(logger);
