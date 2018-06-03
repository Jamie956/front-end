const pets = (req, res, next) => {
  if (req.url.match(/^\/pets\/(.+)/)) {
    foo();
  } else {
    next();
  }
};
module.exports = pets;
