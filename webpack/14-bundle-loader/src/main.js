// var load = require('bundle-loader!./a.bundle.js');
var load = require('./a.bundle.js');

console.log(load);

load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});