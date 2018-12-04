var cp = require('child_process');
var child1 = cp.fork('child1.js');
var child2 = cp.fork('child1.js');

var server = require('net').createServer();
server.listen(1337, function(){
  child1.send('server', server);
  child2.send('server', server);

  server.close();
});