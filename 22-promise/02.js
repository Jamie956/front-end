//调用异步函数，返回promise对象
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
