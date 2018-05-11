var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
	return defer.promise;
}

var outputPromise = getInputPromise().then(function(fulfilled){
	return 'fulfilled'
});

outputPromise.then(function(fulfilled){
	console.log('fulfilled: ' + fulfilled);
},function(rejected){
	console.log('rejected: ' + rejected);
});

// defer.reject('inputpromise rejected');//rejected: inputpromise rejected

defer.resolve();//fulfilled: fulfilled