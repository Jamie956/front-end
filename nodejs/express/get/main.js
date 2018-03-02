var express = require('express');
var app = express();

app.get('/index.html', function(req, res){
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/login', function(req, res){
    var response = {
        'name': req.query.name,
        'password': req.query.password
    };
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, function(){
    console.log('listen on port: 3000.');
});

