var Q = require('q');
var defer = Q.defer();

function getInitialPromise() {
  return defer.promise;
}

getInitialPromise().then(function(success){
	console.log('1'+success);
},function(error){
	console.log('2'+error);
},function(progress){
	console.log('3'+progress);
});
defer.notify('in progress');
defer.resolve('resolve');
defer.reject('reject');//没有输出。promise的状态只能改变一次