//创建pomise对象，返回resolve
function test01() {
  var promise = new Promise(resolve => {
    resolve(42);
  });
  promise.then(res => {
    console.log(res);
  });
}

//创建pomise对象，返回resolve
function test02() {
  var promise = new Promise(reject => {
    reject(new Error("Something Wrong"));
  });
  promise
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
}

//创建pomise对象，返回resolve或reject
function test03() {
  var promise = new Promise((resolve, reject) => {
    if (true) {
      resolve(42);
    } else {
      reject(new Error("Something Wrong"));
    }
  });
  promise
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
}

//调用异步函数，返回promise对象
function test04() {
  function asyncFun() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Got it");
      }, 2000);
    });
  }
  asyncFun()
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
  console.log("Go on");
}

//promise语法糖，返回resolve
function test05() {
  var promise = Promise.resolve(42);
  promise.then(res => {
    console.log(res);
  });
}

//promise语法糖，返回reject
function test06() {
  var promise = Promise.reject(new Error("Something Wrong"));
  promise.catch(e => {
    console.log(e);
  });
}

//调用链错误处理
function test07() {
  var promise = Promise.resolve();

  promise
    .then(() => console.log("task a"))
    .then(() => {
      console.log("task b");
      // throw new Error("task b meet with error");
    })
    .then(() => console.log("finish"))
    .catch(e => {
      console.log(e);
    });
}

//调用链传递返回值
function test08() {
  var promise = Promise.resolve(1);
  promise
    .then(val => {
      return val * 2;
    })
    .then(val => {
      return val * 2;
    })
    .then(val => {
      console.log(val);
    })
    .catch(e => {
      console.log(e);
    });
}

//promise all,多个resolve 的值返回一个数组
function test09() {
  function getData(URL) {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve(URL);
      } else {
        reject(new Error("Something Wrong"));
      }
    });
  }
  Promise.all([getData("baidu.com"), getData("google.com")])
    .then(val => console.log(val))
    .catch(e => console.log(e));
}

//promise all
function test10() {
  function timerPromisefy(delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(delay);
      }, delay);
    });
  }
  var startDate = Date.now();
  // 异步,所有promise变为resolve后程序退出
  Promise.all([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
  ]).then(res => {
    console.log(Date.now() - startDate + "ms");
    console.log(res);
  });
}

//promise race
function test11() {
  function timerPromisefy(delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(delay);
      }, delay);
    });
  }
  // 任何一个promise变为resolve或reject 的话程序就停止运行
  Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
  ]).then(value => console.log(value));
}

test11();
