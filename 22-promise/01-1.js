//simple example
var promise = new Promise(resolve => {
  resolve(42);
});
promise.then(val => {
  console.log(val);
});