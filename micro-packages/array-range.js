//获取指定范围的连续整数数组
module.exports = function newArray(start, end) {
  //检查传入参数类型是否是number
  var n0 = typeof start === "number",
    n1 = typeof end === "number";

  //n0是number，n1不是number，即传入参数实际只有start
  if (n0 && !n1) {
    //范围是[0,start]
    end = start;
    start = 0;
    //n0和n1都不是number
  } else if (!n0 && !n1) {
    //范围是[0,0]
    start = 0;
    end = 0;
  }

  //如果start,end是非法符号，转为0
  start = start | 0;
  end = end | 0;
  //数组长度
  var len = end - start;
  //长度检查
  if (len < 0) throw new Error("array length must be positive");

  //创建指定长度的数组
  var a = new Array(len);
  //i索引，c元素
  for (var i = 0, c = start; i < len; i++, c++) a[i] = c;
  return a;
};
