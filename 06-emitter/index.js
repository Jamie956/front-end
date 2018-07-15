const User = require("./User");

const user = new User();

//emitter监听change事件
user.on("change", () => {
  console.log("change!!");
});

user.print();

user.add({ name: "jerry",email:"jerry@email.com" });

user.print();
