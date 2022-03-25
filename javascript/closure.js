// 读取函数内部变量
// 返回函数
function t1() {
  let clo = (function() {
    var j = 4;
    return function() {
      console.log(j);
    };
  })();
  clo();
}

function t2() {
  //立即执行的匿名函数
  var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();

  console.log(Counter.value()); //0
  Counter.increment();
  console.log(Counter.value()); //1
}

t1();
