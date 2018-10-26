module.exports = remove;

//Efficiently remove an element from an unordered array without doing a splice 
function remove(arr, i) {
  //检查索引是否在数组范围内，索引是否小于0
  if (i >= arr.length || i < 0) return;
  //移除数组最后一位元素，返回最后一位元素
  var last = arr.pop();
  //要移除的数是否在[0,arr.length-1]范围内
  if (i < arr.length) {
    //存放移除的值，用于返回
    var tmp = arr[i];
    //最后一位数与要移除的数发生交换
    arr[i] = last;
    return tmp;
  }
  //要移除的数刚好是最后一位数
  return last;
}
