var Q = require('q');
var defer = Q.defer();

var users = [{'name':'andrew','passwd':'password'}];

function getUsername() {
    return defer.promise;
}

function getUser(username){
	var user;
	users.forEach(function(element){
		if(element.name === username) {
			user = element;
		}
	});
	return user;
}

getUsername().then(function(username){
 return getUser(username);
}).then(function(user){
 console.log(user);
});

defer.resolve('andrew');