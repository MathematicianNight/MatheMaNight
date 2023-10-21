// module
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const HTTPS = require('https');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'http://13.124.51.51',
  'http://13.124.51.51:4000',
  'https://api.mathnight.site',
];

const cors_options = {
  // origin: allowedOrigins, // 접근 권한을 부여하는 도메인
  // credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  // optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(cors_options));

// Run server
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));

app.get('/', (req, res) => {
  // 리액트 프로젝트 빌드 파일
  res.sendFile(path.join(__dirname, '../client/mathmatician/build/index.html'));
});

// // 운영 환경일때만 적용
// if (process.env.NODE_ENV == 'production') {
//   try {
//     const option = {
//       ca: fs.readFileSync('/etc/letsencrypt/live/mathnight.site/fullchain.pem'),
//       key: fs.readFileSync('/etc/letsencrypt/live/mathnight.site/privkey.pem'),
//       cert: fs.readFileSync('/etc/letsencrypt/live/mathnight.site/cert.pem'),
//     };

//     HTTPS.createServer(option, app).listen(app.get('port'), () => {
//       console.log('HTTPS 서버가 실행되었습니다. 포트 :: ' + app.get('port'));
//     });
//   } catch (err) {
//     console.log('HTTPS 서버가 실행되지 않습니다.');
//     console.log(err);
//   }
// } else {
//   app.listen(app.get('port'), () => {
//     console.log('HTTP 서버가 실행되었습니다. 포트 :: ' + app.get('port'));
//   });
// }

app.listen(app.get('port'), () => {
  console.log('서버가 실행되었습니다. 포트 :: ' + app.get('port'));
});
