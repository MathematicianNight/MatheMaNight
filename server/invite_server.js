// module
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'http://13.124.51.51:5000',
  'http://13.124.51.51:4000',
];

const options = {
  origin: allowedOrigins, // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

app.use(cors(options));

// Run server
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));

app.get('/', (req, res) => {
  // 리액트 프로젝트 빌드 파일
  res.sendFile(path.join(__dirname, '../client/mathmatician/build/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중..');
});
