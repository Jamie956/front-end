console.log("Begin");
function printColor(cb) {
  setTimeout(function() {
    cb();
  }, 2000);
}
var color = "blue";
(function(color) {
  printColor(function() {
    console.log("The color is " + color);
  });
})(color); //传说中的闭包, closure
color = "green";
console.log("End");
