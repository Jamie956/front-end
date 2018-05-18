var express = require('express');
var cookieParser = require('cookie-parser');
var i18n = require('i18n');

i18n.configure({
  locales: ['en', 'de', 'ar', 'zh'],
  cookie: 'seti18n',
  directory: __dirname + '/locales'
});

var app = express();
app.use(cookieParser());
app.use(i18n.init);

app.get('/', function (req, res) {
  res.send('<body>res: ' + res.__('Hello') + ' req: ' + req.__('Hello') + '</body>');
});

app.listen(3000);