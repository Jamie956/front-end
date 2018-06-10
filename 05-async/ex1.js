console.log("Begin");
function printColor(cb) {
  setTimeout(function() {
    cb();
  }, 2000); // execute the cb function after 2s
}
var color = "blue";
printColor(function() {
  console.log("The color is " + color);
});
color = "green";
console.log("End");
