//reject
var promise = new Promise((resolve, reject) => {
  reject(new Error('BOOM'));
});
promise
  .then(val => {
    console.log(val);
  })
  .catch(e => {
    console.log(e);
  });
