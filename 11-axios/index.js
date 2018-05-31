const express = require("express");
const app = express();
const axios = require("axios");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.get("/", (req, res) => {
  axios
    .get("http://localhost:8080/product")
    .then(function(response) {
      let data = response.data;
      res.json(data);
    })
    .catch(function(error) {
      console.log(error);
      res.end(error);
    });
});

app.get("/get", (req, res) => {
  axios
    .get("http://localhost:8080/product/123")
    .then(function(response) {
      let data = response.data;
      res.json(data);
    })
    .catch(function(error) {
      console.log(error);
      res.end(error);
    });
});

app.get("/add", (req, res) => {
  axios
    .post("http://localhost:8080/product", {
      id: "01",
      name: "tom"
    })
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get("/add2", (req, res) => {
  axios({
    method: "post",
    url: "http://localhost:8080/product",
    data: {
      id: "01",
      name: "tom"
    }
  })
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen("3000", () => {
  console.log("listen on port 3000");
});
