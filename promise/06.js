//new promise suger for reject
Promise.reject(new Error("BOOM")).catch(e => {
  console.log(e);
});

//is equal to
var promise = new Promise((resolve, reject) => {
  reject(new Error("Oops"));
});

promise
  .then(val => {
    console.log(val);
  })
  .catch(e => {
    console.log(e);
  });
