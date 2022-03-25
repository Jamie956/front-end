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
  //获取需要加载的组件名
  console.log("modules: ", modules);
  let bundles = getBundles(stats, modules);
  //获取该组件的路径
  console.log(bundles);

  res.send(html);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, console.log("Listen on port 3000"));
});
