"use strict";

//去除数组中重复第2次以上的元素
function dedupe(client, hasher) {
  //hasher 数组元素转成指定特征，默认转成str
  hasher = hasher || JSON.stringify;

  //装去重数组
  const clone = [];
  //储存不重复元素的对象，{ '1': true, '2': true, '3': true }
  const lookup = {};

  //遍历用户数组
  for (let i = 0; i < client.length; i++) {
    //读取当前元素
    let elem = client[i];
    //当前元素转成指定特征
    let hashed = hasher(elem);
    // lookup对象是否存在特征，不存在就说明有共同特征的数组还没读取过
    if (!lookup[hashed]) {
      //当前元素添加到去重数组
      clone.push(elem);
      //添加当前元素特征到对象lookup
      lookup[hashed] = true;
    }
  }

  return clone;
}

module.exports = dedupe;
