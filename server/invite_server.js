// // module
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// const allowedOrigins = [
//   'http://localhost:3000',
//   'http://localhost:5000',
//   'http://13.124.51.51',
//   'http://13.124.51.51:4000',
//   'https://api.mathnight.site',
// ];

// const cors_options = {
//   // origin: allowedOrigins, // 접근 권한을 부여하는 도메인
//   // credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
//   // optionsSuccessStatus: 200, // 응답 상태 200으로 설정
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// };

// app.use(cors(cors_options));

// // Run server
// app.set('port', process.env.PORT || 5000);

// app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));

// app.get('/', (req, res) => {
//   // 리액트 프로젝트 빌드 파일
//   res.sendFile(path.join(__dirname, '../client/mathmatician/build/index.html'));
// });

// // 운영 환경일때만 적용
// if (process.env.NODE_ENV == 'production') {
//   try {
//     console = window.console || {};
//     console.log = function no_console() {}; // console log 막기

//     app.listen(app.get('port'), () => {
//       console.log('서버가 실행되었습니다. 포트 :: ' + app.get('port'));
//     });
//   } catch (err) {
//     console.log('서버가 실행되지 않습니다.');
//     console.log(err);
//   }
// } else if (process.env.NODE_ENV == 'development') {
//   app.listen(app.get('port'), () => {
//     console.log('서버가 실행되었습니다. 포트 :: ' + app.get('port'));
//   });
// }

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000; // 포트 설정
const isProduction = process.env.NODE_ENV === 'production'; // 환경 변수 설정

// CORS 설정: 허용할 도메인 목록을 배열로 정의
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'http://13.124.51.51',
  'http://13.124.51.51:4000',
  'https://api.mathnight.site',
];

const corsOptions = {
  origin: function (origin, callback) {
    // 요청 도메인이 허용 목록에 있는지 확인
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));

// 운영 환경일 때만 console.log을 무시하도록 설정
if (isProduction) {
  console.log = function no_console() {}; // console log 막기
}

app.get('/', (req, res) => {
  // 리액트 프로젝트 빌드 파일
  res.sendFile(path.join(__dirname, '../client/mathmatician/build/index.html'));
});

app.listen(port, () => {
  console.log('서버가 실행되었습니다. 포트 :: ' + port);
});
