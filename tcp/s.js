var net = require("net");

var server = net.createServer(socket => {
  socket.on("data", data => {
    console.log(data.toString());
    socket.write("Send to Client");
  });

  socket.on("end", () => console.log("Server Closed"));
});

server.listen(3000, () => console.log("Start server"));
