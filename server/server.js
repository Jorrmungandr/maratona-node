const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

app.listen(3000);