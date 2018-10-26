function test01() {
  var sorted = require("./is-sorted");
  console.log(sorted([1, 2, 3]));
  console.log(sorted([3, 1, 2]));
  console.log(sorted([3, 2, 1], (a, b) => b - a));
}

function test02() {
  var first = require("./array-first");
  var arr = ["a", "b", "c", "d", "e", "f"];
  console.log(first(arr)); //a
  console.log(first(arr, 1)); //a
  console.log(first(arr, 3)); //[ 'a', 'b', 'c' ]
}

function test03() {
  var last = require("./array-last");
  var arr = ["a", "b", "c", "d", "e", "f"];
  console.log(last(arr)); //f
  console.log(last(arr, 1)); //f
  console.log(last(arr, 3)); //['d', 'e', 'f']
}

function test04() {
  var flatten = require("./arr-flatten");
  var arr = ["a", ["b", ["c"]], "d", ["e"]];
  console.log(flatten(arr)); //['a', 'b', 'c', 'd', 'e']
}

test04();
