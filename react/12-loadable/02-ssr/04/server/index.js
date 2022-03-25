import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import path from "path";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "./../../dist/react-loadable.json";
const app = express();

app.use("/dist", express.static(path.resolve("dist")));
app.get("/", (req, res) => {
  let modules = [];

  let html = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );
  let bundles = getBundles(stats, modules);

  //根据bundles的组件路径,生成script
  res.send(`
    <!doctype html>
    <html lang="en">
      <head></head>
      <body>
        <div id="app">${html}</div>
        <script type="javascript" src="/dist/manifest.js" defer></script>
        ${bundles
          .map(bundle => {
            return `<script type="javascript" src="/dist/${bundle.file}" defer></script>`;
          })
          .join("\n")}
        <script type="javascript" src="/dist/main.js" defer></script>
      </body>
    </html>
  `);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, console.log("Listen on port 3000"));
});
