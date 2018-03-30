var express = require('express');
var app = express();

// http://localhost:3000/static/images/mo.jpg
app.use('/static', express.static('public'));

app.listen(3000, () => console.log('listen on port: 3000'));