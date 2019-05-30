var showMem = function() {
  var mem = process.memoryUsage();
  console.log(mem.heapUsed/1000000000);
};

//堆外内存使用测试
var useMem = function() {
  var size = 200 * 1024 * 1024;
  var buffer = new Buffer(size);
  for (var i = 0; i < size; i++) {
    buffer[i] = 0;
  }
  return buffer;
};

var total = [];

for (let j = 0; j < 15; j++) {
  showMem();
  total.push(useMem());
}
showMem();
