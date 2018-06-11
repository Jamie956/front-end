//every then is new object
//avoid use this case
var aPromise = new Promise(function(resolve) {
  resolve(100);
});
aPromise.then(val => {
  return val * 2;
});
aPromise.then(val => {
  return val * 2;
});
aPromise.then(val => {
  console.log("a: ", val);
});

//
var bPromise = new Promise(function(resolve) {
  resolve(100);
});
bPromise
  .then(val => {
    return val * 2;
  })
  .then(val => {
    return val * 2;
  })
  .then(val => {
    console.log("b: ", val);
  });
