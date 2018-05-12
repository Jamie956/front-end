function someAsyncFunction(data, cb) {
    console.log('Executing someAsyncFunction');
    setTimeout(cb, 1000, data);
}
function anotherAsyncFunction(data, cb) {
    console.log('Executing anotherAsyncFunction');
    setTimeout(cb, 1000, data);
}
function yetAnotherAsyncFunction(data, cb) {
    console.log('Executing yetAnotherAsyncFunction');
    setTimeout(cb, 1000, data);
}
function handleResult(text) {
    console.log(text);
}
function innerLogic(text) {
    yetAnotherAsyncFunction(text, handleResult);
}
function outerLogic(text) {
    anotherAsyncFunction(text, innerLogic);
}
someAsyncFunction('some data', outerLogic);