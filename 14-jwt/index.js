// var token = jwt.sign(user, app.get("superSecret"), {
//   expiresIn: 60 * 60 * 24
// }); // 授权时效24小时

// var token = req.body.token || req.query.token || req.headers["x-access-token"];

// // 解码 token (验证 secret 和检查有效期（exp）)
// jwt.verify(token, app.get("superSecret"), function(err, decoded) {
//   if (err) {
//     return res.json({ success: false, message: "无效的token." });
//   } else {
//     // 如果验证通过，在req中写入解密结果
//     req.decoded = decoded;
//     //console.log(decoded)  ;
//     next(); //继续下一步路由
//   }
// });

const express = require("express");
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app = express();
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen("3000", () => {
  console.log("listen on port 3000");
});
