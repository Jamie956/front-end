var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', (req, res) => res.send(req.cookies));

app.listen(3000, () => console.log('listen on port: 3000'));