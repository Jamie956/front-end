"use strict";

//过滤对象，条件可以是数组、函数
module.exports = (obj, predicate) => {
  //新对象
  const ret = {};
  //获取对象的key
  const keys = Object.keys(obj);
  //判断参数predicate是否是数组
  const isArray = Array.isArray(predicate);

  //遍历对象
  for (const key of keys) {
    const val = obj[key];
    //如果predicate是数组就判断predicate是否包含当前的key
    //如果predicate是函数，传入参数并调用
    if (isArray ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      //符合条件的obj元素存入新对象
      ret[key] = val;
    }
  }

  return ret;
};
