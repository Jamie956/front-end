var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function(req, res){
    res.sendFile( __dirname + "/" + "index_get.html" );
});

app.get('/login', function(req, res){
    var response = {
        'name': req.query.name,
        'password': req.query.password
    };
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listen on port: '+port);
});

