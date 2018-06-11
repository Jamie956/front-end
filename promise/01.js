//simple example
var promise = new Promise(resolve => {
  resolve(42);
});
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.error(error);
  });
