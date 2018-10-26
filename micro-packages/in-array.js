"use strict";

//数组是否存在某个值，arr数组，val值
module.exports = function inArray(arr, val) {
  //如果arr不是数组，默认[]
  arr = arr || [];
  //数组长度
  var len = arr.length;
  var i;

  //遍历数组
  for (i = 0; i < len; i++) {
    //如果当前数组元素与参数值相等
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
};
