function myAsyncFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Hello World.");
    }, 2000);
  });
}

myAsyncFun()
  .then(data => {
    console.log(data); //Async Hello World.
  })
  .catch(e => {
    console.log(e);
  });
