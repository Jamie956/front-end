const User = require("./User");

const user = new User();

//订阅change事件
user.on("change", () => {
  console.log("change!!");
});

user.print();

user.add({ name: "jerry" });

user.print();
