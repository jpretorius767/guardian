const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/articles');

const app = express();

const port = 4201;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => console.log(`Guardian API running on ${port}!`))
