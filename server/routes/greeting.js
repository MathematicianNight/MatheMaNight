const express = require('express');
const router = express.Router();

const greeting = '안녕하세요';

router.get('/', (req, res) => {
  res.json(greeting);
});

module.exports = router;
