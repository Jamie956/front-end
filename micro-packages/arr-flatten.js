"use strict";

//递归转成一维数组
module.exports = function(arr) {
  return flat(arr, []);
};

function flat(arr, res) {
  var i = 0,
    cur;
  var len = arr.length;
  //遍历数组arr元素
  for (; i < len; i++) {
    cur = arr[i];
    //如果元素是一个数组就继续递归，否则把元素添加到res数组
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
  }
  return res;
}
