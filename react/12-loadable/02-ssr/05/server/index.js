import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "./../../dist/react-loadable.json";
import App from "../shared/App";
import path from "path";
const app = express();

app.use(express.static(path.resolve("dist")));
app.get("/*", (req, res) => {
  console.log("Receive request.");
  let modules = [];
  const context = {};

  //加入路由
  let html = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Loadable.Capture>
  );
  let bundles = getBundles(stats, modules);

  res.send(`
    <!doctype html>
    <html lang="en">
      <head></head>
      <body>
        <div id="app">${html}</div>
        <script type="javascript" src="/dist/manifest.js" defer></script>
        ${bundles
          .map(bundle => {
            return `<script type="javascript" src="/dist/${
              bundle.file
            }" defer></script>`;
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
