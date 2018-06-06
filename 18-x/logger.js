
var connect = require("connect");

//===
connect()
  .use(connect.logger())
  .use(hello)
  .listen(3000);
//===
coonect().use(connect.logger(":method :url :response-time ms"));

// :req[header] ex: :req[Accept]
// :res[header] ex: :res[Content-Length]
// :http-version
// :response-time
// :remote-addr
// :date
// :method
// :url
// :referrer
// :user-agent
// :status

//===
connect().use(connect.logger("dev"));

//===
var log = fs.createWriteStream("myapp.log", { flag: "a" });
connect().use(connect.logger({ format: ":method :url", stream: log }));
//===
connect().use(connect.logger({immediate:true}))