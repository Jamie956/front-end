var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
};

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
});

app.listen(3000, () => console.log('listen on port: 3000'));