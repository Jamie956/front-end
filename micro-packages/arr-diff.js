"use strict";

//去除全部重复的元素
module.exports = function diff(arr /*, arrays*/) {
  //参数长度
  var len = arguments.length;
  var idx = 0;

  //遍历参数对象arguments
  while (++idx < len) {
    //arr是第一个参数，arr与由索引1开始的参数数组比较
    arr = diffArray(arr, arguments[idx]);
  }
  return arr;
};

function diffArray(one, two) {
  if (!Array.isArray(two)) {
    return one.slice();
  }

  var tlen = two.length;
  var olen = one.length;
  var idx = -1;
  //装去重数组
  var arr = [];

  //遍历第一个数组
  while (++idx < olen) {
    //读取当前数组元素
    var ele = one[idx];

    var hasEle = false;
    //遍历第二个数组
    for (var i = 0; i < tlen; i++) {
      //读取当前数组元素
      var val = two[i];
      //如果存在重复元素，中止当前for循环
      if (ele === val) {
        hasEle = true;
        break;
      }
    }

    //ele元素与第二个数组全部元素都不相同
    if (hasEle === false) {
      //ele添加到去重数组
      arr.push(ele);
    }
  }
  return arr;
}
