"use strict";

//生成重复元素，item生成的元素或处理函数，n个数
module.exports = function(item, n) {
  //创建指定长度的数组
  var ret = new Array(n);
  //判断item是否是函数
  var isFn = typeof item === "function";

  //item不是函数就直接重复元素
  if (!isFn && typeof ret.fill === "function") {
    return ret.fill(item);
  }

  //item是函数，调用item()，返回值存入新数组
  for (var i = 0; i < n; i++) {
    ret[i] = isFn ? item(i, n, ret) : item;
  }

  return ret;
};
