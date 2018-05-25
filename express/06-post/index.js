var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/index.html" );
});

app.post('/login', urlencodedParser, (req, res) => {
    var formdata = {
        'name': req.body.name,
        'password': req.body.password
    };
    res.end(JSON.stringify(formdata));
});

app.listen(3000, () => {
    console.log('listen on port: 3000');
});