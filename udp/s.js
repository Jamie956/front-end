var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(msg.toString());
  console.log(rinfo);
});

server.on(() => console.log("Start Server"));

server.bind(3000);
