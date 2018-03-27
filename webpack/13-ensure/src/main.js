require.ensure(['./a'], function (require) {
    var content = require('./a');
    console.log(content);
});

require.ensure(['./b'], function (require) {
    var content = require('./b');
    console.log(content);
});