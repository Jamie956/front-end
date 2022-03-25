function test01() {
  var obj = {
    x: 1,
    y: function foo() {
      console.log(this.x); //this -> obj
    }
  };
  obj.y(); // 1
}

function test02() {
  var obj = {
    x: 20,
    innerobj: {
      x: 30,
      f: function() {
        console.log(this.x);//this -> innerobj
      }
    }
  };
  obj.innerobj.f(); //30
}




test02();
