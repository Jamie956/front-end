var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.send('Hello world.');
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listen on port: '+port);
});