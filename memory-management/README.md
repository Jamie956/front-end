### test01
查看内存日志
```
//运行并生成v8.log
$ node --prof test01.js

//统计日志信息
linux-tick-processor v8.log
```

### test02
查看进程内存占用

process.memoryUsage();


### test03
堆外内存测试