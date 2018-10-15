var events = require("events");
var em = new events.EventEmitter();

function test01() {
  //订阅hi事件
  em.on("hi", () => {
    console.log("Welcome!");
  });
  //发布hi事件
  em.emit("hi");
}

function test02() {
  //订阅error事件
  em.on("error", err => {
    console.log(err.message);
  });
  //发布error事件
  em.emit("error", new Error("Something wrong"));
}

test01();
