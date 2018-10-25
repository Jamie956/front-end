function defaultComparator (a, b) {
  return a - b
}

module.exports = function checksort (array, comparator) {
  //检查数组是否合法
  if (!Array.isArray(array)) throw new TypeError('Expected Array, got ' + (typeof array))
  //使用默认比较器还是自定义的
  comparator = comparator || defaultComparator
  //遍历数组
  for (var i = 1, length = array.length; i < length; ++i) {
    //获取比较大小结果
    if (comparator(array[i - 1], array[i]) > 0) return false
  }
  return true
}
