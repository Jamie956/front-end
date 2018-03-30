var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
	return defer.promise;
}

var outputPromise = getInputPromise().then(function(fulfilled){
    var myDefer = Q.defer();
	fs.readFile('test.txt','utf8',function(err,data){
		if(!err && data) {
			myDefer.resolve(data);
		}
	});
	return myDefer.promise;
},function(rejected){
	throw new Error('rejected');
});

outputPromise.then(function(fulfilled){
	console.log(fulfilled);
},function(rejected){
	console.log(rejected);
});


defer.reject();

// defer.resolve(); //控制台打印出 test.txt 的内容