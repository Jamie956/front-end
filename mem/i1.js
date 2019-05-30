function useMem() {
  var size = 20 * 1024 * 1024;
  var arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = 0;
  }
  return arr;
}

var total = [];

for (let j = 0; j < 15; j++) {
  var mem = process.memoryUsage();
  console.log(mem.heapUsed / (1024 * 1024 * 1024));

  total.push(useMem());
}
