var showMem = function(){
    var mem = process.memoryUsage();
    // var format = function (bytes){
    //     return (bytes / 1024 / 1024).toFixed(2) + 'MB';
    // };
    // console.log('Process: heapTotal ' + mem.heapToal + ' heapUsed ' + mem.heapToal + ' rss ' + mem.heapToal);
    console.log(mem.rss);
    console.log('-------------------------------');
}

var useMem = function(){
    var size = 20*1024*1024;
    var arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = 0;    
    }
    return arr;
}

var total = [];

for (let j = 0; j < 15; j++) {
    showMem();
    total.push(useMem());
}
showMem();
