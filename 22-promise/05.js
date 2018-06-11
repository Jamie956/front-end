//thenable object convert to promise object
Promise.resolve($.ajax("http://azu.github.io/promises-book/json/people.json")).then(val => {
  console.log(val);
});
