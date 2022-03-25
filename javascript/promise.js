// resolve
function t1() {
  new Promise((resolve, reject) => {
    resolve(42);
  }).then(res => {
    console.log(res);
  });
}

// reject
function t2() {
  new Promise((resolve, reject) => {
    reject(new Error("Something Wrong"));
  }).catch(e => {
    console.log(e);
  });
}

// no new resolve
function t3() {
  Promise.resolve(42).then(res => {
    console.log(res);
  });
}

// no new reject
function t4() {
  Promise.reject(new Error("Something Wrong")).catch(e => {
    console.log(e);
  });
}

//调用链传递返回值
function t5() {
  Promise.resolve(1)
    .then(val => {
      return val * 2;
    })
    .then(val => {
      return val * 2;
    })
    .then(val => {
      console.log(val);
    });
}

//promise all
function t6() {
  function Add(URL) {
    return Promise.resolve(URL);
  }
  Promise.all([Add("a"), Add("b")]).then(val => console.log(val));
}

//promise race
function t7() {
  function task(delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    });
  }
  // 任何一个promise变为resolve或reject 的话程序就停止运行
  Promise.race([task(1), task(32), task(64)]).then(rs => console.log(rs));
}

t7();
