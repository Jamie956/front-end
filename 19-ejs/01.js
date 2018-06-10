var ejs = require('ejs')
var fs = require('fs')

var tmp = fs.readFileSync('./views/home.ejs','utf8')

console.log(ejs.render(tmp,{msg:'aooo'}))