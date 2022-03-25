// let: Declares a block-scoped, local variable, optionally initializing it to a value
function test1() {
  if (true) {
    let y = 5;
  }
  console.log(y); // y is not defined
}

// const: Declares a block-scoped, read-only named constant
function test2() {
  {
    const x = 1;
  }
  console.log(x); // x is not defined
}

function test3() {
  {
    const x = 1;
    x = 2;//Assignment to constant variable
  }
}

test3();
