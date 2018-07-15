const EventEmitter = require("events");

class User extends EventEmitter {
  constructor() {
    super();
    //初始化
    this.users = [{ name: "tom" }];
  }

  add(name) {
    this.users.push({ name });
    this.emit("change");
  }

  print() {
    console.log(this.users);
  }
}

module.exports = User;
