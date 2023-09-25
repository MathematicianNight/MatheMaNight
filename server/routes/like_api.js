const express = require('express');
const router = express.Router();

let likeCnt = 0;

router.get('/', (req, res) => {
  res.json(likeCnt);
});

router.post('/upcount', (req, res) => {});

module.exports = router;
