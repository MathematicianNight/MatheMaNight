// 모듈
const express = require('express');
const path = require('path');
const port = process.env.PORT || 20237;

// 서버 생성&실행
const app = express();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 미들웨어 추가
app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));
app.use(express.json());

// 변수 선언
const like_count = 0;
const questions = [];
const invitationData = {
  greeting: '안녕하세요!',
  schedule: ['식사', '개회식', '수학과 영상 시청', '경품 추첨', '폐회식'],
  likeCnt: like_count,
  questions: questions,
  questionsLength: questions.length,
};
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

// main 페이지
app.get('/', function (요청, 응답) {
  응답.sendFile(
    path.join(__dirname, '../client/mathmatician/build/index.html')
  );
});

// like
app.post('/like', (req, res) => {
  if (like_count >= 1000) {
    console.log('좋아요는 1000개 이상 올릴 수 없습니다.');
    res.json(invitationData);
  } else {
    like_count++; // 좋아요 수 증가
    invitationData.likeCnt = like_count; // 좋아요 수 업데이트
    res.json(invitationData);
  }
});

// Q&A
app.get('/question', (req, res) => {
  res.json();
});

app.post('/question', (req, res) => {
  const { question } = req.body;
  questions.push(question); // 새 질문을 배열에 추가
  res.status(201).json(question); // 새 질문 반환
});

// aboutUs 페이지
app.get('/aboutus', (req, res) => {
  res.json(aboutUsData);
});
