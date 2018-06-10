var events = require('events');
var channel = new events.EventEmitter();

//on listen join event
channel.on('join', function () {
    console.log("Welcome!");
});

//notify
channel.emit('join');