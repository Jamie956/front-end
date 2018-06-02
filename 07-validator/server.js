var vd = require("validator");

//api
// console.log(vd.isEmail('foo@bar.com'))
// console.log(vd.isEmpty(''))
// console.log(vd.isJSON(JSON.stringify({name: 'tom'})))
// console.log(vd.isNumeric('123'))
// console.log(vd.isLowercase('a'))
// console.log(vd.isUppercase('a'))
// console.log(vd.blacklist('abcdefga','a'))
// console.log(vd.escape('< - > - & - /'))

//form
var data = {
  name: "tom",
  age: '18',
  email: "tom@email.com",
  password: "abc123"
};

function myVd(data) {
  if (vd.isEmpty(data["name"])) return "name should not be empty";
  if (!vd.isNumeric(data["age"].toString())) return "age should be num";
  if (!vd.isEmail(data["email"])) return "not email";
  if (!vd.isLength(data["password"], { min: 2, max: 6 })) return "pwd should 2-6";

  return true;
}

console.log(myVd(data));
