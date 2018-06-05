const sharp = require("sharp");

sharp("./cake.jpeg")
  // .resize(200,null)
  .resize(null, 200)
  .background({ r: 0, g: 0, b: 0, alpha: 0 })
  .toFile("./resize.jpeg")
  .then(data => console.log(data))
  .catch(err => console.log(err));
