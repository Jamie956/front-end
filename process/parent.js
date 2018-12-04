var cp = require('child_process');
var n = cp.fork('./child.js');

n.on('message', function(m){
  console.log('PARENT got message: ', m);
});

n.send({name: 'tom'});