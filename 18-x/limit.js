var connect = require("connect");
var app = connect().use(connect.bodyParser());
app.listen(3000);
//===
var http = require("http");
var req = http.request({
  method: "POST",
  port: 3000,
  headers: {
    "Content-Type": "application/json"
  }
});
req.write("[");
var n = 300000;
while (n--) {
  req.write('"foo",');
}
req.write('"bar"]');
req.end();
//===
var app = connect()
  .use(connect.limit("32kb"))
  .use(connect.bodyParser())
  .use(hello);
http.createServer(app).listen(3000);

//===
function type(type, fn) {
  return function(req, res, next) {
    var ct = req.headers["content-type"] || "";
    if (0 != ct.indexOf(type)) {
      return next();
    }
    fn(req, res, next);
  };
}
var app = connect()
  .use(type("application/x-www-form-urlencoded", connect.limit("64kb")))
  .use(type("application/json", connect.limit("32kb")))
  .use(type("image", connect.limit("2mb")))
  .use(type("video", connect.limit("300mb")))
  .use(connect.bodyParser())
  .use(hello);
