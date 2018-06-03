const connect = require("connect");

const admin = (req, res, next) => {
  switch (req.url) {
    case "/":
      res.end("try users");
      break;
    case "/users":
      res.end(JSON.stringify(["tom", "muyo"]));
      break;
  }
};
const app = connect()
  .use("/admin", admin)
  .use("/home", admin);

app.listen(3000, console.log("listen on port 3000"));
