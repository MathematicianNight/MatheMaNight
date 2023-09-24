// 모듈
const express = require('express');
const path = require('path');

// 서버 생성&실행
const app = express();
app.listen(20237, () => {
  console.log('Server Running at http://localhost:20237');
});

app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '../client/mathmatician/build/index.html'));
});

const like_count = 0;

// 미들웨어 추가

// 변수 선언
const invitationData = {
  greeting: '안녕하세요!',
  schedule: ['식사', '개회식', '수학과 영상 시청', '경품 추첨', '폐회식'],
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
app.get('/', (req, res) => {
  res.send({ invitationData, like_count });
});

// like

// Q&A

// aboutUs 페이지
app.get('/aboutus', (req, res) => {
  res.send(aboutUsData);
});