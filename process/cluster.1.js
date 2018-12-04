// var cluster = require('cluster');
// var http = require('http');
// var numCPUs = require('os').cpus().length;

// if(cluster.isMaster){
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
// }

// cluster.setupMaster({
//   exec: 'worker.js'
// });

// var cpus = require('os').cpus();

