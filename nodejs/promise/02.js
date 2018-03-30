var Q = require('q');
var defer = Q.defer();

function getInputPromise() {
	return defer.promise;
}

var outputPromise = getInputPromise().then(function(fulfilled){
	return 'fulfilled';
},function(rejected){
	return 'rejected';
});

outputPromise.then(function(fulfilled){
	console.log('fulfilled: ' + fulfilled);
},function(rejected){
	console.log('rejected: ' + rejected);
});

// defer.reject();

defer.resolve(); 