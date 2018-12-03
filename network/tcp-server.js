var net = require("net");

var server = net.createServer(function(socket) {
  socket.on("data", function(data) {
    console.log(data.toString());
    socket.write("from server to client");
  });

  socket.on("end", function() {
    console.log("server died");
  });
});

server.listen(8124, function() {
  console.log("server listen on port 8124");
});
