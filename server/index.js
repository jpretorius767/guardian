'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articles');
// const cors = require('cors');

const PORT = 4201;

const app = express()
 // .use(cors())
  .use(bodyParser.json())
  .use(articleRoutes);

  // error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Guardian API listening on port ${PORT}`);
});

module.exports = app;