// require.ensure([], function (require) {
//     var content = require('./a');
//     console.log(content);
// });

// require.ensure([], function (require) {
//     var content = require('./b');
//     console.log(content);
// });

//###################

// require('./a');
// require.ensure([], function (require) {
//     var content = require('./b');
//     console.log(content);
// });

//###################

// require.ensure(['./a.js'], function (require) {//depend module a.js 
//     var content = require('./b.js');
//     console.log(content);
// });

//###################

$('#btn_a').click(function () {
    require.ensure([], function (require) {
        var content = require('./a');
        console.log(content);
    }, 'a');
})

$('#btn_b').click(function () {
    require.ensure([], function (require) {
        var content = require('./b');
        console.log(content);
    }, 'b');
})