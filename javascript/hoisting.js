// Variable hoisting
function test1() {
  console.log(x); // undefined
  var x = 3;
}

// Function hoisting
function test2() {
  foo();
  function foo() {
    console.log("hi");
  }
}

test2();
