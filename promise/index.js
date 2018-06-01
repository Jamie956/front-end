// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => {
//   console.log(`Got the final result: ${finalResult}`);
// })
// .catch(failureCallback);

//
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this whatever happened before");
  });
