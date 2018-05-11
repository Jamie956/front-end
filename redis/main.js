var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
  console.log('connected');
});

client.set('name', 'tomcat');
client.expire('name', 30);

client.set(['email', 'tomcat@gmail.com']);

client.set('address', 'CA', function (err, reply) {
  console.log(reply);
});

client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');
client.hgetall('frameworks', function (err, object) {
  console.log(object);
});

client.hmset('music', {
  'id': '5d',
  'song': 'Water Mark',
  'singer': 'Enya'
});

client.rpush(['sad', 'angularjs', 'backbone'], function(err, reply) {
  console.log(reply); //prints 2
});