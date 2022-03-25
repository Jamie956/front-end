import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import serialize from "serialize-javascript";
import App from "../shared/App";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res, next) => {
  const data = { name: "tom", email: "tomemail" };
  const context = { data };
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(3000, console.log("Listening on port: 3000"));
