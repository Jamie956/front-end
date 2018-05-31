const express = require("express");
const app = express();
const axios = require("axios");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.get("/", (req, res) => {
  //get
  axios
    .get("http://localhost:8080/product")
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(e => console.log("Oops", e));
});

app.get("/get", (req, res) => {
  //get with /{id}
  axios
    .get("http://localhost:8080/product/123")
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(e => console.log("Oops", e));
});

app.get("/get2", (req, res) => {
  //get with params json
  axios
    .get("http://localhost:8080/product/get", {
      params: {
        id: 4399
      }
    })
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(e => console.log("Oops", e));
});

app.get("/add", (req, res) => {
  //post with data json
  axios
    .post("http://localhost:8080/product", {
      data: {
        id: "01",
        name: "tom"
      }
    })
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(e => console.log("Oops", e));
});

app.get("/add2", (req, res) => {
  //using config
  axios({
    method: "post",
    url: "http://localhost:8080/product",
    data: {
      id: "01",
      name: "tom"
    }
  })
    .then(res => res.data)
    .then(data => res.json(data))
    .catch(e => console.log("Oops", e));
});

app.listen("3000", () => {
  console.log("listen on port 3000");
});
