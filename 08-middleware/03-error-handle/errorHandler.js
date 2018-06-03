const errorHandler = () => {
  console.log("call errorHandler");

  let env = "dev";
  return (err, req, res, next) => {
    console.log("call err return");
    res.statesCode = 500;
    switch (env) {
      case "dev":
        res.setHeader("Content-Type", "application/json");
        console.log("err", err);
        res.end(JSON.stringify(err));
        break;
      default:
        res.end("Server error");
    }
  };
};

module.exports = errorHandler;
