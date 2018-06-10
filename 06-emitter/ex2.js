var events = require("events");
var errEmitter = new events.EventEmitter();

errEmitter.on("error", err => {
  console.log("ERROR: " + err.message);
});

errEmitter.emit("error", new Error("Something wrong"));