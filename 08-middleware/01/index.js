const connect = require("connect");
const router = require("./router");

const routes = {
  GET: {
    "/users": (req, res) => {
      res.end("tom, mik");
    },
    "/user/:id": (req, res, id) => {
      res.end("get user id " + id);
    }
  },
  POST: {
    "/user": (req, res) => {
      res.end("post user");
    }
  }
};
connect()
  .use(router(routes))
  .listen(3000, console.log("listen on port 3000."));
