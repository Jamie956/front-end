var validator = require('validator');

var result = validator.isEmail('foo@bar.com'); //=> true

console.log(result)

// isEmpty(str)

// isJSON(str)
isNumeric(str)

isLowercase(str)
isUppercase(str)


var blacklist = validator.blacklist('abcdefga','a');  
console.log('blacklist :', blacklist); 


var escape = validator.escape('< - > - & - /');  
console.log('escape :', escape);  