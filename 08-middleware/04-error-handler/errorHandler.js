//(err, ...)
//if(condition)
const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.setHeader("Content-Type", "application/json");
  if (err.notFound) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: err.message }));
  } else {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Inernal Server Error." }));
  }
};

module.exports = errorHandler;
