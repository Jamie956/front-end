var net = require("net");

var client = net.connect(
  { port: 8124 },
  function() {
    console.log("client connected");
    client.write("from client to server");
  }
);

client.on("data", function(data) {
  console.log(data.toString());
  client.end();
});

client.on("end", function() {
  console.log("client disconnected");
});
