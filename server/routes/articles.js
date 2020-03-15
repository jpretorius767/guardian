'use strict';
const express = require('express');
const router = express.Router();
const API_KEY = '8f0940bd-66db-4c46-af3f-3e044ad14939';
const axios = require('axios').default;

// Data-source is The Guardian API
// ● Two End points:
// ○ Create one endpoint that returns list of Articles for the front-end Home-page
// ○ Create another endpoint to get Details of the specific Article for Details-page
// ● Articles are to be fetched from The Guardian API
// ● Endpoint should support search and Pagination


// List of articles
router.get('/articles/:id', (req, res) => {
  res.send('About this wiki');
})

// Article search
router.get('/articles/search/:search', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query['page-size']) || 10;
      const search = req.params.search;
      const URL = `https://content.guardianapis.com/search?page=${page}&page-size=${pageSize}&q=${search}&api-key=${API_KEY}`;
      let response = await axios.get(URL);
      const data = response.data.response;
      res.send(data);
    } catch (err) {
     errorHandler(err);
    }
  });


function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
}

module.exports = router;
