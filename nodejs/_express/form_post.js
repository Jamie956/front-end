var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/index.html', function(req, res){
    res.sendFile( __dirname + "/" + "index_post.html" );
});

app.post('/login', urlencodedParser, function(req, res){
    var response = {
        'name': req.body.name,
        'password': req.body.password
    };
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listen on port: '+port);
});

