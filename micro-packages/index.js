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

function test06() {
  var array = require("./array-range");

  console.log(array(3)); //[ 0, 1, 2 ]
  console.log(array(1, 4)); //[ 1, 2, 3 ]

  console.log(array(5).map(x => x * x)); //[ 0, 1, 4, 9, 16 ]
  console.log(array(2, 10).filter(x => x % 2 === 0)); //[ 2, 4, 6, 8 ]
}

function test07() {
  var diff = require("./arr-diff");

  var a = ["a", "b", "c", "d"];
  var b = ["b", "c"];

  console.log(diff(a, b)); //['a', 'd']
}

function test08() {
  const filledArray = require("./filled-array");

  console.log(filledArray("x", 3)); //['x', 'x', 'x']
  console.log(filledArray(0, 3)); //[0, 0, 0]
  console.log(
    filledArray(i => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i, 15)
  ); //[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
}

function test09() {
  const mapArray = require("./map-array");
  const obj = {
    giorgio: "Bianchi",
    gino: "Rossi"
  };
  console.log(mapArray(obj, (key, value) => key + " " + value));
  //['giorgio Bianchi', 'gino Rossi']
}

function test10() {
  var inArray = require("./in-array");
  console.log(inArray(["a", "b", "c"], "a")); //true
  console.log(inArray(null, "a")); //false
  console.log(inArray(null)); //false
}

function test11() {
  var remove = require("./unordered-array-remove");

  var list = ["a", "b", "c", "d", "e"];
  remove(list, 2); // remove 'c'
  console.log(list); // returns ['a', 'b', 'e', 'd'] (no 'c')
}

test11();
