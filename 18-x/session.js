var connect = require("connect");
var app = connect()
  .use(connect.favicon())
  .use(connect.cookieParser("keyboard cat"))
  .use(connect.session())
  .use(function(req, res, next) {
    var sess = req.session;
    if (sess.views) {
      res.setHeader("Content-Type", "text/html");
      res.write("<p>views: " + sess.views + "</p>");
      res.end();
      sess.views++;
    } else {
      sess.views = 1;
      res.end("welcome to the session demo. refresh!");
    }
  });
app.listen(3000);
//===
var hour = 3600000;
var sessionOpts = {
key: 'myapp_sid',
cookie: { maxAge: hour * 24, secure: true }
};
connect()
.use(connect.cookieParser('keyboard cat'))
.use(connect.session(sessionOpts))
//===
res.write('<p>views: ' + sess.views + '</p>');
res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
res.write('<p>httpOnly: ' + sess.cookie.httpOnly + '</p>');
res.write('<p>path: ' + sess.cookie.path + '</p>');
res.write('<p>domain: ' + sess.cookie.domain + '</p>');
res.write('<p>secure: ' + sess.cookie.secure + '</p>');
//===
req.session.cookie.expires = new Date(Date.now() + 5000);

//===
req.session.cookie.maxAge = 5000;
req.session.cookie.path = '/admin';
req.session.cookie.httpOnly = false;
//===
// require connect-redis
var connect = require('connect')
var RedisStore = require('connect-redis')(connect);
var app = connect()
.use(connect.favicon())
.use(connect.cookieParser('keyboard cat'))
.use(connect.session({ store: new RedisStore({ prefix: 'sid' }) }))