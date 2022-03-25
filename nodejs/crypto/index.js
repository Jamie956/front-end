var crypto = require("crypto");
const fs = require('fs');


//加密
function encrypt(str, secret) {
  var cipher = crypto.createCipher("aes192", secret);
  var enc = cipher.update(str, "utf8", "hex");
  enc += cipher.final("hex");

  return enc;
}

//解密
function decrypt(str, secret) {
  var decipher = crypto.createDecipher("aes192", secret);
  var dec = decipher.update(str, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}



fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('1');
  var en = encrypt(data, '123');
  console.log(en);
  console.log('2');
  var de = decrypt(en, '123');
  console.log(de);
});