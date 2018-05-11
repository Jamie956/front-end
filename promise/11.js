var Q = require('q'),
	fs = require('fs');
function printFileContent(fileName) {
	return function(){
		var defer = Q.defer();
		fs.readFile(fileName,'utf8',function(err,data){
		  if(!err && data) {
			console.log(data);
			defer.resolve();
		  }
		})
		return defer.promise;
	}
}
//手动链接
printFileContent('sample01.txt')()
	.then(printFileContent('sample02.txt'))
	.then(printFileContent('sample03.txt'));