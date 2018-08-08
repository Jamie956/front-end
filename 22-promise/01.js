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
    reject(new Error("...BOOM..."));
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
      reject(new Error("...BOOM..."));
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

test03();
