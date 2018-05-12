function doSomething() {
    return true;
}
function asyncFunction(failure, success) {
    if (doSomething()) {
        success();
    } else {
        failure();
    }
}
asyncFunction(
    function () { console.log('I handle failure.'); },
    function () { console.log('I handle success.'); }
);