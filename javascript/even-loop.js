setTimeout(function() {
  console.log("setTimeout macrotask"); //macrotask
});

new Promise(function(resolve) {
  console.log("promise script marcotask"); //marcotask
  resolve();
}).then(function() {
  console.log("then microtask"); //microtask
});

console.log("script macrotask"); //macrotask

/**
 * promise script marcotask
 * script macrotask
 * then microtask
 * setTimeout macrotask
*/