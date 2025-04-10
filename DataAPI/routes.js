const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Define a route for the about page
router.get('/api', (req, res) => {
  res.send('MethodRouting Code Will be here');
});

module.exports = router;
