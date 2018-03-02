const express = require('express');
const { render } = require('../../build/bundle_server');
const app = express();

app.get('/', function (req, res) {
  res.send(`
    <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
    <div id="app">${render()}</div>
    <script src="./build/bundle_client.js"></script>
    </body>
    </html>
  `);
});

app.use(express.static('.'));

app.listen(3000, function () {
  console.log('app listening on port 3000!')
});