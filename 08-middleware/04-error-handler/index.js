const connect = require("connect");
const hello = require("./hello");
const user = require("./user");
const pets = require("./pets");
const errorHandler = require("./errorHandler");
const errorPage = require("./errorPage");

const api = connect()
  .use(user)
  .use(pets)
  .use(errorHandler);

connect()
  .use(hello)
  .use("/api", api)
  .use(errorPage)
  .listen(3000, console.log("listen on port 3000"));
