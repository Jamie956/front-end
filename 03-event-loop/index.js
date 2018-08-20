function test01() {
  console.log("start");

  function printColor(cb) {
    setTimeout(function() {
      cb();
    }, 2000);
  }

  var color = "blue";

  printColor(function() {
    console.log("The color is " + color);
  });

  color = "green";

  console.log("end");

  /**
   * 打印start
   * 定义函数printColor
   * 定义变量color
   * 调用函数printColor,2s后将入栈
   * 给变量color赋值
   * 打印end
   * 2s时,传入的匿名函数入栈,如果前面无其他任务,立即执行函数,打印 The color is green
   */
}

function test02() {
  console.log("start");

  function printColor(cb) {
    setTimeout(function() {
      cb();
    }, 2000);
  }

  var color = "blue";

  (function(color) {
    printColor(function() {
      console.log("The color is " + color);
    });
  })(color); //传说中的闭包, closure

  color = "green";
  console.log("end");

  /**
   * 打印start
   * 定义函数printColor
   * 定义变量color
   * 定义闭包匿名函数,传入变量color且变量的值在函数内被锁定不变
   * 调用函数printColor,2s后将入栈
   * 赋值变量color
   * 打印end
   * 2s时,传入的匿名函数入栈,如果前面无其他任务,立即执行函数,blue就是传入时的值,打印 The color is blue
   */
}

test02();
