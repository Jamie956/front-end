// function getURL(text) {
//   return new Promise(function(resolve, reject) {
//     var success = true;
//     if (success) {
//       resolve({ msg: "it is success: ", text: text });
//     } else {
//       reject(new Error("it is error"));
//     }
//   });
// }
// var request = {
//   comment: function getComment() {
//     return getURL("hi");
//   },
//   people: function getPeople() {
//     return getURL("ok");
//   }
// };
// function main() {
//   return Promise.all([request.comment(), request.people()]);
// }
// // 运行示例
// main()
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

//===

// function foo(text) {
//   return new Promise(function(resolve, reject) {
//     var success = true;
//     if (success) {
//       resolve({ msg: "it is success: ", text: text });
//     } else {
//       reject(new Error("it is error " + text));
//     }
//   });
// }
// function bar(text) {
//   return new Promise(function(resolve, reject) {
//     var success = true;
//     if (success) {
//       resolve({ msg: "it is success: ", text: text });
//     } else {
//       reject(new Error("it is error " + text));
//     }
//   });
// }
// function main() {
//   return Promise.all([foo("hi"), bar("ok")]);
// }
// // 运行示例
// main()
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

//===

function main() {
  return Promise.all([
    new Promise(function(resolve, reject) {
      var success = true;
      if (success) {
        setTimeout(() => {
          resolve({ msg: "it is success: ", text: "hi" });
        }, 2000);
      } else {
        reject(new Error("it is error " + "hi"));
      }
    }),
    new Promise(function(resolve, reject) {
      var success = true;
      if (success) {
        resolve({ msg: "it is success: ", text: "ok" });
      } else {
        reject(new Error("it is error " + "ok"));
      }
    })
  ]);
}
// 运行示例
main()
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log(error);
  });
