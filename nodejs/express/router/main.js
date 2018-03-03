var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Got a GET request at /'));

app.post('/', (req, res) => res.send('Got a POST request at /'));

app.put('/user', (req, res) => res.send('Got a PUT request at /user'));

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));

app.listen(3000, () => console.log('listen on port: 3000'));