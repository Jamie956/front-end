const connect = require("connect");
const hello = require("./hello");
const user = require("./user");
const pets = require("./pets");
const errorHandler = require("./errorHandler");

connect()
  .use(hello)
  .use(user)
  .use(pets)
  .use(errorHandler)
  .listen(3000, console.log("listen on port 3000"));

//   var api = connect()
// .use(users)
// .use(pets)
// .use(errorHandler);
// var app = connect()
// .use(hello)
// .use('/api', api)
// .use(errorPage)
// .listen(3000);
