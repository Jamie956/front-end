const connect = require("connect");
const app = connect();
const logger = require('./logger')

const hello = (req, res, next) => {
  res.end("hi");
};

app.use(logger(':method :url')).use(hello);

app.listen(3000, console.log("listen on port 3000"));
