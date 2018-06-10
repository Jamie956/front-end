//cookie parser
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/get', (req, res) => {
    res.send(req.cookies)
});

app.get('/set', (req, res) => {
    res.cookie('name', 'tom', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.end('ok');
});

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
