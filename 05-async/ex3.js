function a(data, cb) {
    console.log('Executing a');
    setTimeout(cb, 1000, data);
}
function b(data, cb) {
    console.log('Executing b');
    setTimeout(cb, 1000, data);
}
function c(data, cb) {
    console.log('Executing c');
    setTimeout(cb, 1000, data);
}
function handleResult(text) {
    console.log(text);
}
function innerLogic(text) {
    c(text, handleResult);
}
function outerLogic(text) {
    b(text, innerLogic);
}
a('hi', outerLogic);