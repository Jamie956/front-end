var isNumber = require("is-number");

//获取arr最后n位数或数组
module.exports = function last(arr, n) {
  //检查是否为合法数组
  if (!Array.isArray(arr)) {
    throw new Error("expected the first argument to be an array");
  }
  //空数组就没必要获取元素
  var len = arr.length;
  if (len === 0) {
    return null;
  }

  //n默认为1，必须是正数
  n = isNumber(n) ? +n : 1;
  //获取最后1位就直接返回最后1位数
  if (n === 1) {
    return arr[len - 1];
  }

  //指定长度创建数组，储存截取的数组
  var res = new Array(n);
  //新数组由后往前遍历，装入arr由末尾开始读取的元素
  while (n--) {
    res[n] = arr[--len];
  }
  return res;
};
