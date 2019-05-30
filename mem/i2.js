//堆外内存
function useMem() {
  var size = 200 * 1024 * 1024;
  var buffer = new Buffer(size);
  for (var i = 0; i < size; i++) {
    buffer[i] = 0;
  }
  return buffer;
}

var total = [];

for (let j = 0; j < 15; j++) {
  var mem = process.memoryUsage();
  console.log(mem.heapUsed / (1024 * 1024 * 1024));

  total.push(useMem());
}
