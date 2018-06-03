const url = require("url");
const parse = url.parse;

const router = obj => {
  return (req, res, next) => {
    console.log(req.method);
    console.log(obj);
  };
};

module.exports = router;
