var Q = require('q');
var fs = require('fs');
/**
 *读取文件内容
 *@private
 */
function printFileContent(fileName) {
		//Todo: 这段代码不够简洁。可以使用Q.denodeify来简化
		var defer = Q.defer();
		fs.readFile(fileName,'utf8',function(err,data){
		  if(!err && data) {
			console.log(data);
			defer.resolve(fileName + ' success ');
		  }else {
			defer.reject(fileName + ' fail ');
		  }
		})
		return defer.promise;
}

Q.all([printFileContent('sample01.txt'),printFileContent('sample02.txt'),printFileContent('sample03.txt')])
	.then(function(success){
		console.log(success);
	}); //控制台打印各个文件内容 顺序不一定