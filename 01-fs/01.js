//read file as utf8
var fs = require("fs");
fs.readFile("./resource.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
