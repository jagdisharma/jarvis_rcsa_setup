const express = require('express');
const router = express.Router();

// Process map routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Process map routes - under development' });
});

module.exports = router;