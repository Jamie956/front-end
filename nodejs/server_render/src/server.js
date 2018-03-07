const express = require('express');
const app = express();

const path = require('path');
const { render } = require(path.resolve('dist/bundle.server'));

app.use(express.static('.'));

app.get('/', function (req, res) {
  res.send(`
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
    <div id="app">${render()}</div>
    <script src="./dist/bundle.client.js"></script>
    </body>
    </html>
  `);
});

app.listen(3000, () => {console.log('Listening on port 3000!')});