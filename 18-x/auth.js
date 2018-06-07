var app = connect().use(connect.basicAuth("tj", "tobi"));

var users = {
  tobi: "foo",
  loki: "bar",
  jane: "baz"
};

//===
var app = connect().use(
  connect.basicAuth(function(user, pass) {
    return users[user] === pass;
  })
);

//===

var app = connect();
app.use(
  connect.basicAuth(function(user, pass, callback) {
    User.authenticate({ user: user, pass: pass }, gotUser);
    function gotUser(err, user) {
      if (err) return callback(err);
      callback(null, user);
    }
  })
);

//===
var connect = require("connect");
var app = connect()
  .use(connect.basicAuth("tobi", "ferret"))
  .use(function(req, res) {
    res.end("I'm a secret\n");
  });
app.listen(3000);
