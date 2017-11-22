var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener1
var listener1 = function listener1() {
   console.log('listener1 execute');
}

//listener2
var listener2 = function listener2() {
  console.log('listener2 execute');
}

//bind connect event with function listener1
eventEmitter.addListener('connection', listener1);

//bind connect event with function listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " of connect event listener");

// execute connection event
eventEmitter.emit('connection');

//unbind function listener1
eventEmitter.removeListener('connection', listener1);
console.log("remove listener1");

//trigger connect event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " of connect event listener");

console.log("done");