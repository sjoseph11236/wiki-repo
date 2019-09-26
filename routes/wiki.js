const express = require('express');
const router = express.Router();
module.exports = router;
const functionDirectory = require('../views/index.js');
const addPageFunc = functionDirectory.addPage;

// All the routes have /wiki before the path
router.get('/add', (req, res) => {
  res.send(addPageFunc());
});

// The router is  type of thing to add to different pages to execute routes in that page
