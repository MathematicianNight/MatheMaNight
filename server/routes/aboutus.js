const express = require('express');
const router = express.Router();

const aboutUsData = [
  {
    name: '최하늘',
    part: 'Design',
  },
  {
    name: '김민정',
    part: 'Front-end',
  },
  {
    name: '강혜리',
    part: 'Front-end',
  },
  {
    name: '이수현',
    part: 'Back-end',
  },
];

router.get('/', (req, res) => {
  res.json(aboutUsData);
});

module.exports = router;
