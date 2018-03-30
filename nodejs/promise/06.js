var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
	return defer.promise;
}

var outputPromise = getInputPromise().then(null,function(rejected){
	return 'rejected';
});

outputPromise.then(function(fulfilled){
	console.log('fulfilled: ' + fulfilled);
},function(rejected){
	console.log('rejected: ' + rejected);
});

defer.reject('inputpromise rejected');//fulfilled: rejected

// defer.resolve('inputpromise fulfilled'); //fulfilled: inputpromise fulfilled