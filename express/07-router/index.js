var express = require('express')
var app = express()
var routes = require('./routes')

routes.init(app)
app.listen(3000, () => console.log('listen on port: 3000'));