var a = require('./pages/a.js');
var b = require('./pages/b.js');
var c = require('./c.js');

$('#btn_a').click(function () {
  a(function (content) {
    console.log(content)
  });
})

$('#btn_b').click(function () {
  b(function (content) {
    console.log(content)
  });
})

$('#btn_c').click(function () {
    console.log(c)
})