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
app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("secret", "jwtsecret");
app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.post("/authenticate", (req, res) => {
  let user = {
    name: req.body.name,
    password: req.body.password
  };
  if (user.name == "tom" && user.password == "123") {
    let token = jwt.sign(user, app.get("secret"), { expiresIn: 60 * 60 * 24 });
    res.json({ success: true, msg: 'use your token', token: token });
  } else {
    res.json({ success: false, msg: "name or pwd error" });
  }
});

app.listen("3000", () => {
  console.log("listen on port 3000");
});
