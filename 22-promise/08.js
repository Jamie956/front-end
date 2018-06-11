//promise chain
function taskA() {
  console.log("taskA");
}
function taskB() {
  console.log("taskB");
}
function onRejected(error) {
  console.log(error);
}
function finalTask() {
  console.log("final task");
}
var promise = Promise.resolve();
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
  .then(finalTask);
