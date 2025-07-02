const express = require('express');
const router = express.Router();

// Auth routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Auth routes - under development' });
});

module.exports = router;