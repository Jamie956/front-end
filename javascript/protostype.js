function test1() {
  let user = function() {
    this.name = "tom";
    this.age = 18;
  };

  user.prototype.age = 28;
  user.prototype.address = "GZ";

  let u = new user();
  // {name: 'tom', age: 18} -> {age: 28, address: 'GZ'} -> Object.prototype -> null
  console.log(u.name); // tom
  console.log(u.age); // 18
  console.log(u.address); // GZ
  console.log(u.random); // undefined
}

function test2() {
  var a = { a: 1 };
  // a -> Object.prototype -> null

  var b = Object.create(a);
  // b -> a -> Object.prototype -> null
  console.log(b.a); // 1 (inherited)

  var c = Object.create(b);
  // c -> b -> a -> Object.prototype -> null
  console.log(c.a);

}

test1();