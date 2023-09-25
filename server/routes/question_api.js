const express = require('express');
const router = express.Router();

router.get('/question', (req, res) => {
  res.json();
});

router.post('/question/process', (req, res) => {
  const { question } = req.body;
  questions.push(question); // 새 질문을 배열에 추가
  res.status(201).json(question); // 새 질문 반환
});

module.exports = router;
