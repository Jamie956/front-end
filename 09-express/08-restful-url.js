//express RESTful
var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Got a GET request at /'));

app.post('/', (req, res) => res.send('Got a POST request at /'));

app.put('/user', (req, res) => res.send('Got a PUT request at /user'));

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));

//localhost:3000/secret
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next()
})

//localhost:3000/users/34/books/8989
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

//localhost:3000/flights/LAX-SFO
app.get('/flights/:from-:to', function (req, res) {
  res.send(req.params)
})

app.listen(3000, console.log("LISTEN ON PORT: 3000"));
