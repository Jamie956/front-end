var express = require('express');
var app = express();

var auth = function (req, res, next) {
  console.log('auth')
  next()
};

app.use(auth)

app.get('/', function (req, res) {
  console.log('get')
  res.send('hi')
});

app.listen(3000, () => console.log('listen on port: 3000'));