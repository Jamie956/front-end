//thenable object convert to promise object
Promise.resolve($.ajax("/hello.json")).then(val => {
  console.log(val);
});
