import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import path from "path";
import Loadable from "react-loadable";
const app = express();

//简单服务端渲染
app.use("/dist", express.static(path.resolve("dist")));
app.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <body>
        <div id="app">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, console.log("Listen on port 3000"));
});
