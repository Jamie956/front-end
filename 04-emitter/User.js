const EventEmitter = require("events");

class User extends EventEmitter {
  constructor() {
    super();
    this.users = [{ name: "tom" }];
  }
  add(u) {
    this.users.push(u);
    this.emit("change"); //发布change事件
  }
  print() {
    console.log(this.users);
  }
}

module.exports = User;
