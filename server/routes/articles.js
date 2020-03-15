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

router.get('/articles', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query['page-size']) || 10;
    const URL = `https://content.guardianapis.com/search?page=${page}&page-size=${pageSize}&api-key=${API_KEY}`;
    let response = await axios.get(URL);
    const data = response.data.response;
    res.send(data);
  } catch (err) {
   errorHandler(err);
  }
})


// Specific article
router.get('/articles/:id', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query['page-size']) || 10;
    const id = req.params.id;
    const URL = `https://content.guardianapis.com/search?ids=${id}page=${page}&page-size=${pageSize}&api-key=${API_KEY}`;
    let response = await axios.get(URL);
    const data = response.data.response;
    res.send(data);
  } catch (err) {
   errorHandler(err);
  }
})

// Article search
router.get('/articles/search/:term', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query['page-size']) || 10;
      const term = req.params.term;
      const URL = `https://content.guardianapis.com/search?page=${page}&page-size=${pageSize}&q=${term}&api-key=${API_KEY}`;
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
