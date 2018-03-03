var express = require('express');
var app = express();

app.use(express.static('public'));

app.use('/static', express.static('public'))

app.listen(3000, () => console.log('listen on port: 3000'));
