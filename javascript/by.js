//by value
function test1() {
  var a = 3;//a=3
  var b;//b=undefined

  b = a;//b=3
  a = 2;//a=2
  console.log(a);
  console.log(b);
}

//by reference
function test2() {
  var c = { greeting: "Hello" };
  var d;
  d = c;//d -> c -> { greeting: "Hello" }

  c.greeting = "Hola";//c -> { greeting: "Hola" }

  console.log(c);
  console.log(d);
}

test2();
