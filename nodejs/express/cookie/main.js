var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
    console.log('cookie: ', req.cookies);
});

var server = app.listen(3000, function(){
    console.log('listen on port: 3000');
});