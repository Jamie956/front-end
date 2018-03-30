var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
	return defer.promise;
}

var outputPromise = getInputPromise().then(function(fulfilled){
	return fulfilled;
}).fail(function(error){
	console.log('fail: ' + error);
});

// defer.reject('inputpromise rejected');//fail: inputpromise rejected

defer.resolve('inputpromise fulfilled');