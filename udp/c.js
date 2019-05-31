var dgram = require("dgram");
var client = dgram.createSocket("udp4");

var message = new Buffer("Send to Server");
client.send(message, 0, message.length, 3000, "localhost", (err, bytes) =>
  client.close()
);
