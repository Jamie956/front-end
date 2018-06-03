const url = require("url");
const parse = url.parse;

const router = obj => {
  return (req, res, next) => {
    if (!obj[req.method]) {
      next();
      return;
    }
    let url = parse(req.url); //req url
    let routes = obj[req.method];
    let paths = Object.keys(routes); //config keys

    for (let i = 0; i < paths.length; i++) {
      let path = paths[i];
      const fn = routes[path];
      path = path.replace(/\//g, "\\/").replace(/:(\w+)/g, "([^\\/]+)");
      const re = new RegExp("^" + path + "$");
      let captures = url.pathname.match(re);
      if (captures) {
        const args = [req, res].concat(captures.slice(1));
        fn.apply(null, args);
        return;
      }
    }
    next();
  };
};

module.exports = router;
