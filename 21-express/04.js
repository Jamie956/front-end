//exposing data to views by locals
var express  = require('express')
var app = express()
var path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.email = 'myemail@email.com'

app.get('/',(req,res)=>{
    res.render('about')
})

app.listen(3000,console.log('LISTEN ON PORT 3000'))