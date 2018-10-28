"use strict";
var isObj = require("is-obj");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  return Object(val);
}

function assignKey(to, from, key) {
  var val = from[key];

  if (val === undefined || val === null) {
    return;
  }

  if (hasOwnProperty.call(to, key)) {
    if (to[key] === undefined || to[key] === null) {
      throw new TypeError(
        "Cannot convert undefined or null to object (" + key + ")"
      );
    }
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

function assign(to, from) {
  //相同就不用合并了
  if (to === from) {
    return to;
  }

  from = Object(from);
  
  //遍历对象from的key
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(from);

    for (var i = 0; i < symbols.length; i++) {
      if (propIsEnumerable.call(from, symbols[i])) {
        assignKey(to, from, symbols[i]);
      }
    }
  }

  return to;
}

module.exports = function deepAssign(target) {
  //第一个参数
  target = toObject(target);
  //遍历参数
  for (var s = 1; s < arguments.length; s++) {
    //将逐个参数与target合并
    assign(target, arguments[s]);
  }

  return target;
};
