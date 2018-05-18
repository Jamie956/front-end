var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var i18n = require('i18n');
var app = express();

i18n.configure({
  locales: ['en', 'de', 'ar', 'zh'],
  cookie: 'youri18n',
  directory: __dirname + '/locales'
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(i18n.init);

app.get('/', function (req, res) {
  res.render('index')
});

app.listen(3000);