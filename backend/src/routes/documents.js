const express = require('express');
const router = express.Router();

// Document routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Document routes - under development' });
});

module.exports = router;