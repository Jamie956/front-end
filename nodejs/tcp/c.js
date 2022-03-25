var net = require("net");

var client = net.connect({ port: 3000 }, () => {
  console.log("Client connected");
  client.write("Send to Server");
});

client.on("data", data => {
  console.log(data.toString());
  client.end();
});

client.on("end", () => {
  console.log("Client disconnected");
});
