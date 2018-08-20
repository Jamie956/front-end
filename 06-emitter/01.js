var events = require("events");
var eventEmitter = new events.EventEmitter();

function test01() {
  //订阅hi事件
  eventEmitter.on("hi", function() {
    console.log("Welcome!");
  });

  //发布hi事件
  eventEmitter.emit("hi");
}

function test02() {
  //订阅error事件
  eventEmitter.on("error", err => {
    console.log(err.message);
  });
  //发布error事件
  eventEmitter.emit("error", new Error("Something wrong"));
}

test02();
