const user = (req, res, next) => {
  //match url
  //if(user)
  //to be or not
  //http://localhost:3000/api/user/tom
  let match = req.url.match(/^\/user\/(.+)/);
  if (match) {
    let rawUser = match[1];
    if (rawUser === "tom") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(rawUser));
    } else {
      let err = new Error("User not found.");
      err.notFound = true;
      next(err);
    }
  } else {
    next();
  }
};
module.exports = user;
