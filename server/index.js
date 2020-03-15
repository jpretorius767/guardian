'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articles');
const cors = require('cors');

const PORT = 4201;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(articleRoutes);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Guardian API listening on port ${PORT}`);
});

module.exports = app;