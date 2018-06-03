const connect = require("connect");
const router = require("./router");

const routes = {
  GET: {
    "/users": (req, res) => {
      res.end("tom, mik");
    }
  }
};
connect()
  .use(router(routes))
  .listen(3000, console.log("listen on port 3000."));
