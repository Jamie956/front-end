const User = require("./User");

const user = new User();

user.on("change", () => {
  console.log("change!!");
});

user.print();

user.add("newbee");

user.print();
