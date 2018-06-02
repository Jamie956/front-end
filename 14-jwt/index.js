const express = require("express");
app = express();
const router = express.Router();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("secret", "jwtsecret");
app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.post("/authenticate", (req, res) => {
  let user = {
    name: req.body.name,
    password: req.body.password
  };
  if (user.name == "tom" && user.password == "123") {
    let token = jwt.sign({ name: user.name }, app.get("secret"), {
      expiresIn: 60 * 60 * 24
    });
    res.cookie("token", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: false
    });
    return res.json({ success: true, msg: "use your token", token: token });
  } else {
    return res.json({ success: false, msg: "name or pwd error" });
  }
});

app.use(router);
router.use((req, res, next) => {
  let token = req.cookies.token;
  if (token) {
    jwt.verify(token, app.get("secret"), (err, decoded) => {
      if (err) {
        return res.json({ success: false, msg: "bad token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({ success: false, msg: "token not found" });
  }
});
router.get("/api", (req, res) => {
  console.log(req.decoded);
  res.send("welcome use api.");
});

app.listen("3000", () => {
  console.log("listen on port 3000");
});
