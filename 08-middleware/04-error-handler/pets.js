const pets = (req, res, next) => {
  //http://localhost:3000/api/pets/xxx
  if (req.url.match(/^\/pets\/(.+)/)) {
    foo();
  } else {
    next();
  }
};
module.exports = pets;
