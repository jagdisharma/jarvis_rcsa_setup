const express = require('express');
const router = express.Router();

// Template routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Template routes - under development' });
});

module.exports = router;