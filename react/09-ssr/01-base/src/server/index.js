import express from "express";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import React from "react";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res, next) => {
  const markup = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(3000, console.log(`Listening on port: 3000`));
