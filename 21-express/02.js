//express render views using template ejs
var express  = require('express')
var app = express()
var path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index',{title:'mimi'})
})

app.listen(3000,console.log('LISTEN ON PORT 3000'))