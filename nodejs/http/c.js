var http = require("http");

var options = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/",
  method: "GET"
};

var req = http.request(options, res => {
  console.log(res.statusCode);
  console.log(res.headers);
  res.setEncoding("utf8");
  res.on("data", chunk => {
    console.log(chunk);
  });
});

req.end();
