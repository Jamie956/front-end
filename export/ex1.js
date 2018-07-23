// 导出函数
module.exports.foo = (name) =>{
  console.log("is " + name);
};

// module.exports = function(name, age) {
//   this.name = name;
//   this.age = age;
//   this.about = function() {
//     console.log(this.name + " is " + this.age + " years old");
//   };
// };

// 导出数组
// module.exports = ['Lemmy Kilmister', 'Ozzy Osbourne', 'Ronnie James Dio', 'Steven Tyler', 'Mick Jagger'];

// 导出对象,包含多个函数
// module.exports = {
//   foo: () => {
//     console.log('foo');
//   },
//   bar: () => {
//     console.log('bar');
//   }
// };

