const setup = format => {
  const regexp = /:(\w+)/g;
  return (logger = (req, res, next) => {
    var str = format.replace(regexp, (match, property) => {
      return req[property];
    });
    console.log(str);
    next();
  });
};

module.exports = setup;
