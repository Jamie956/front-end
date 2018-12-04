var cluster = require('cluster');

cluster.setupMaster({
  exec: 'worker.js'
});

var cpus = require('os').cpus();

for (let i = 0; i < cpus.length; i++) {
  cluster.fork();
}