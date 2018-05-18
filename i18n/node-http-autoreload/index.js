var i18n = require('i18n');
var http = require('http');
var url = require('url');
var app;

i18n.configure({
  locales: ['en', 'zh'],
  directory: __dirname + '/locales',
  autoReload: true //reload auto
});

app = http.createServer(function (req, res) {
  i18n.init(req, res);
  res.end(res.__('Hello World'));
});

app.listen(3000, '127.0.0.1');