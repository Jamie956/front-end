//new promise suger for resolve
Promise.resolve(42).then(val => {
  console.log(val);
});

//is equal to
var promise = new Promise((resolve, reject) => {
  resolve("success");
});

promise
  .then(rs => {
    console.log(rs);
  })
  .catch(e => {
    console.log(e);
  });
