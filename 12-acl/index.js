//minimal example
var express = require("express");
var app = express();
var session = require("express-session");
var acl = require("acl");

//session
app.use(
  session({
    secret: "Adfg1d5g3fd2gd",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30
    }
  })
);

//acl
acl = new acl(new acl.memoryBackend());
acl.allow([
  {
    roles: "guest",
    allows: [{ resources: "/article/get", permissions: "*" }]
  },
  {
    roles: "user",
    allows: [{ resources: "/article/edit", permissions: "*" }]
  },
  {
    roles: "admin",
    allows: [{ resources: "/article/del", permissions: "*" }]
  }
]);
acl.addRoleParents("user", "guest"); // user角色拥有guest角色所有的权限
acl.addRoleParents("admin", "user"); // admin角色拥有user角色所有的权限

//mid
var authentication = (req, res, next) => {
  console.log(req.session);

  var userId = req.session.userId || "";
  if (userId) {
    acl
      .isAllowed(userId, req.path, "*")
      .then(allowed => {
        if (allowed) {
          next();
        } else {
          next("权限不足");
        }
      })
      .catch(e => {
        next(e.message);
      });
  } else {
    next("请登录");
  }
};
var errorhandler = (e, req, res, next) => {
  res.send({ message: e });
};

//route
app.all("/", (req, res, next) => {
  var html = `
    <div>
      <input class="name" type="text" placeholder="输入用户名" value="" autocomplete="off">
      <button class="add">创建用户</button>
      <p>guest角色可以访问/article/get，user角色可以访问/article/edit，admin角色可以访问/article/del</p>
      <p>默认情况下，访问1、2、3都会被拒绝</p>
      <p>创建用户后，会自动给新创建的用户添加guest和 user角色，所以允许访问1、2</p>
      <p>点击4后，删除了用户的user角色，只能访问1了</p>
      <p>
        <span>1.</span>
        <a href="/article/get" target="_blank">访问/article/get</a>
      </p>
      <p>
        <span>2.</span>
        <a href="/article/edit" target="_blank">访问/article/edit</a>
      </p>
      <p>
        <span>3.</span>
        <a href="/article/del" target="_blank">访问/article/del</a>
      </p>
      <p>
        <span>4.</span>
        <a href="/user/del" target="_blank">删除用户的user角色</a>
      </p>
    </div>
    <script>
      window.onload = function() {
        document.querySelector('.add').onclick = function() {
          window.open('/user/add?name='+ document.querySelector('.name').value)
        }
      }
    </script>
  `;
  res.send(html);
});

//add
app.all("/user/add", (req, res, next) => {
  var _name = req.query.name;
  var _id = Date.now();

  req.session.userId = _id;
  req.session.userName = _name;
  // 用户获得角色user的权限
  // acl.addUserRoles(_id, ["guest", "user"]);
  // 用户获得角色admin的权限
  acl.addUserRoles(_id, ["guest", "admin"]);

  res.send({ message: "添加用户角色成功" });
});
// 删除角色
app.all("/user/del", (req, res, next) => {
  acl.removeUserRoles(req.session.userId, "user");
  res.send({ message: "删除用户角色成功" });
});
// 访问article
app.all("/article/get", authentication, (req, res, next) => {
  res.send({ message: "/article/get" });
});
// 编辑article
app.all("/article/edit", authentication, (req, res, next) => {
  res.send({ message: "/article/edit" });
});
// 删除article
app.all("/article/del", authentication, (req, res, next) => {
  res.send({ message: "/article/del" });
});
app.use(errorhandler);

app.listen(3000, console.log("listen on port: 3000"));
