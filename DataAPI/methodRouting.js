const express = require('express');
const router = express.Router();

// Define a route for user profile
router.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

// Define a route for user settings
router.get('/settings', (req, res) => {
  res.send('User Settings Page');
});

module.exports = router;
