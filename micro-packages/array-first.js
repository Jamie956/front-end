var isNumber = require("is-number");
var slice = require("array-slice");

//获取数组arr前num位元素的数组或数字
module.exports = function arrayFirst(arr, num) {
  //检查数组是否合法
  if (!Array.isArray(arr)) {
    throw new Error("array-first expects an array as the first argument.");
  }
  //数组无元素就返回null
  if (arr.length === 0) {
    return null;
  }
  //获取新数组
  var first = slice(arr, 0, isNumber(num) ? +num : 1);
  //获取1位数时，返回1个数字
  if (+num === 1 || num == null) {
    return first[0];
  }
  //位数大于1时，返回数组
  return first;
};
