//trnasfer arg
function increment(val) {
  return 1 + val;
}
function doubleUp(val) {
  return val * 2;
}
function print(val) {
  console.log(val);
}
var promise = Promise.resolve(1);
promise
  .then(increment)
  .then(doubleUp)
  .then(print)
  .catch(e => {
    console.log(e);
  });
