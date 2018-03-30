var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
	return defer.promise;
}

var outputPromise = getInputPromise().then(function(fulfilled){
	throw new Error('fulfilled');
},function(rejected){
	throw new Error('rejected');
});

outputPromise.then(function(fulfilled){
	console.log('fulfilled: ' + fulfilled);
},function(rejected){
	console.log('rejected: ' + rejected);
});

defer.reject();//rejected: Error: rejected

// defer.resolve();//rejected: Error: fulfilled