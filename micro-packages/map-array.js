"use strict";
const map = require("map-obj");

//对象转数组
function mapToArray(obj, fn) {
  let idx = 0;
  //obj -> [k, v] -> obj
  const result = map(obj, (key, value) => [idx++, fn(key, value)]);
  result.length = idx;
  //obj-> arr
  return Array.from(result);
}

module.exports = mapToArray;
