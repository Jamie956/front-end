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

function test05() {
  var dedupe = require("./dedupe");

  var a = [1, 2, 2, 3];
  console.log(dedupe(a)); //[1, 2, 3]

  var aa = [{ a: 2 }, { a: 1 }, { a: 1 }, { a: 1 }];
  console.log(dedupe(aa)); //[{a: 2}, {a: 1}]

  var aaa = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }];
  console.log(dedupe(aaa, value => value.a)); //[{a: 2, b: 1}, {a: 1,b: 2}]
}

test05();
