const EventEmitter = require("events");

class User extends EventEmitter {
  constructor() {
    super();
    //初始化
    this.users = [{ name: "tom", email: "tom@email.com" }];
  }
  add(u) {
    this.users.push(u); //添加数据
    this.emit("change"); //发出通知，监听change事件的emiiter被触发
  }
  //打印数据
  print() {
    console.log(this.users);
  }
}

//导出函数
module.exports = User;
