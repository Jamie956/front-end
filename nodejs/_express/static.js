var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listen on port: '+port);
});

//http://localhost:3000/images/mo.jpg