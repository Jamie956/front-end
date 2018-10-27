"use strict";

var toString = Function.call.bind(Object.prototype.toString);

function isObj(o) {
  return toString(o) === "[object Object]";
}

// Original zipmap
function _zipmap(keys, vals) {
  //找出keys, vals中长度比较短的
  var shorter = keys.length > vals.length ? vals : keys;

  return shorter.reduce(function(map, val, idx) {
    //将keys, vals对应索引的值取出，对应k-v存到map
    map[keys[idx]] = vals[idx];
    return map;
  }, {});
}

function zipmapPairs(pairs) {
  //pairs经过reduce，组成对象
  return pairs.reduce(function(map, pair) {
    //pair数组元素pair[0]-pair[1]对应key-val
    map[pair[0]] = pair[1];
    return map;
  }, {});
}

function zipmapObj(objs) {
  return objs.reduce(function(map, o) {
    map[o.key] = o.value;
    return map;
  }, {});
}

//Returns a map with the keys mapped to the corresponding vals.
module.exports = function zipmap(keys, vals) {
  //没有传入参数vals
  if (!vals) {
    //keys为空
    if (Array.isArray(keys) && !keys.length) return {};
    //keys元素是数组
    if (Array.isArray(keys[0])) return zipmapPairs(keys);
    //keys元素是对象
    if (isObj(keys[0])) return zipmapObj(keys);
    throw new TypeError("Expected vals to be an array");
  }

  //传入了参数vals
  return _zipmap(keys, vals);
};
