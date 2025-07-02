const express = require('express');
const router = express.Router();

// Definition routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Definition routes - under development' });
});

module.exports = router;