//.then is async
var promise = new Promise(resolve => {
  console.log("inner promise");
  resolve(77);
});

promise.then(val => {
  console.log(val);
});

console.log("outer promise");
