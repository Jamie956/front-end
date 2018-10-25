function test01() {
  var sorted = require("./is-sorted");
  console.log(sorted([1, 2, 3]));
  console.log(sorted([3, 1, 2]));
  console.log(sorted([3, 2, 1], (a, b) => b - a));
}

function test02() {
  var first = require("./array-first");
  console.log(first(["a", "b", "c", "d", "e", "f"]));
  console.log(first(["a", "b", "c", "d", "e", "f"], 1));
  console.log(first(["a", "b", "c", "d", "e", "f"], 3));
}

test01();
