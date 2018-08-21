//routes
var express = require("express");
var app = express();
var apiRouter = express.Router();
var pageRouter = express.Router();

function auth(req, res, next) {
  console.log("auth");
  next();
}

apiRouter.get("/api", (req, res) => {
  res.end("Welcome API");
});
apiRouter.get("/api/user", (req, res) => {
  res.end("User API");
});

pageRouter.get("/home", (req, res) => {
  res.end("Wow, it's Home");
});

app.use(pageRouter);
app.use(auth, apiRouter);

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
