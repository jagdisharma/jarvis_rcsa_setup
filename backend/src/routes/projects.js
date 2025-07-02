const express = require('express');
const router = express.Router();

// Project routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Project routes - under development' });
});

module.exports = router;