var fork = require("child_process").fork;

// 不负责具体业务处理，负责调度或管理工作进程，fork()复制的进程都是一个独立的进程
fork("./worker1.js");
fork("./worker2.js");