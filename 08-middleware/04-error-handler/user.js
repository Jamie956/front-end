const user = (req, res, next) => {
  //match url
  //if(user)
  //to be or not
  //   console.log(req.url)
  let match = req.url.match(/^\/user\/(.+)/); //http://localhost:3000/user/tom
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
