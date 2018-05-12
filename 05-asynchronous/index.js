function asyncFunction(callback) {
    setTimeout(function () {
        callback()
    }, 2000);
}
var color = 'blue';
asyncFunction(function () {
    console.log('The color is ' + color);
});
color = 'green';

//===============

// function asyncFunction(callback) {
//     setTimeout(function () {
//         callback()
//     }, 2000);
// }
// var color = 'blue';
// (function (color) {
//     asyncFunction(function () {
//         console.log('The color is ' + color);
//     })
// })(color);
// color = 'green';