var Q = require('q');
var defer = Q.defer();

function getInitialPromise() {
  return defer.promise;
}

var outputPromise = getInitialPromise().then(function(success){

}).progress(function(progress){
	console.log(progress);
});

defer.notify(1);
defer.notify(2); //控制台打印1，2