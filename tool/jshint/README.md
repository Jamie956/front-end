```
===Enforcing(增强)===
bitwise               禁用位运算符
camelcase             使用驼峰命名(camelCase)或全大写下划线命名(UPPER_CASE)
curly                 在条件或循环语句中使用{}来明确代码块
eqeqeq                使用===和!==替代==和!=
es3                   强制使用ECMAScript 3规范
es5                   强制使用ECMAScript 5规范
forin                 在for in循环中使用Object.prototype.hasOwnProperty()来过滤原型链中的属性
freeze                禁止复写原生对象(如Array, Date)的原型
immed                 匿名函数调用必须(function() {}());而不是(function() {})();
indent                代码缩进宽度
latedef               变量定义前禁止使用
newcap                构造函数名首字母必须大写
noarg                 禁止使用arguments.caller和arguments.callee
noempty               禁止出现空的代码块
nonew                 禁止使用构造器
plusplus              禁止使用++和–-
quotemark             统一使用单引号或双引号
undef                 禁止使用不在全局变量列表中的未定义的变量
unused                禁止定义变量却不使用
strict                强制使用ES5的严格模式
trailing              禁止行尾空格
maxparams             函数可以接受的最大参数数量
maxdepth              代码块中可以嵌入{}的最大深度
maxstatement          函数中最大语句数
maxcomplexity         函数的最大圈复杂度
maxlen                一行中最大字符数

===Relaxing(松弛)===
asi          　　　　　允许省略分号
boss        　　　　　 允许在if，for，while语句中使用赋值
debug        　　　　　允许debugger语句
eqnull       　　　　　允许==null
esnext       　　　　  允许使用ECMAScript 6
evil            　　　 允许使用eval
expr                  允许应该出现赋值或函数调用的地方使用表达式
funcscope             允许在控制体内定义变量而在外部使用
globalstrict          允许全局严格模式
iterator           　 允许__iterator__
lastsemic             允许单行控制块省略分号
laxbreak              允许不安全的行中断
laxcomma        　　　 允许逗号开头的编码样式
loopfunc              允许循环中定义函数
maxerr        　　　　 JSHint中断扫描前允许的最大错误数
multistr        　　  允许多行字符串
notypeof        　　　 允许非法的typeof操作
proto                 允许 proto
smarttabs        　　  允许混合tab和space排版
shadow            　　 允许变量shadow
sub            　　　　 允许使用person[‘name’]
supernew        　　　 允许使用new function() {…}和new Object
validthis        　　  允许严格模式下在非构造函数中使用this
noyield        　　　  允许发生器中没有yield语句

===config===
unused //禁止定义变量却不使用
asi  //允许省略分号
```
