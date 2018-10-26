function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

function isArray(arr) {
  var type = getType(arr);
  var arrTypes = [
    "Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array"
  ];

  return arrTypes.indexOf(type) !== -1;
}

module.exports = function chunks(arr, size) {
  //检查参数arr
  if (!isArray(arr)) {
    throw new TypeError("Input should be Array or TypedArray");
  }

  //检查参数size
  if (typeof size !== "number") {
    throw new TypeError("Size should be a Number");
  }

  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    //是否支持Array.slice
    if (typeof arr.slice === "function") {
      //截取长度为size数组存入result
      result.push(arr.slice(i, size + i));
    } else {
      result.push(arr.subarray(i, size + i));
    }
  }

  return result;
};
