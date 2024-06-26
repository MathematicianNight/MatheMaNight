// require lib & framework
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

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

// server functions
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '../client/mathmatician/build')));
app.get('/', (req, res) => {
  // 리액트 프로젝트 빌드 파일
  res.sendFile(path.join(__dirname, '../client/mathmatician/build/index.html'));
});

app.use(express.static(path.join(__dirname, '../admin/build')));
app.get('/admin', (req, res) => {
  try {
    // 리액트 프로젝트 빌드 파일
    res.sendFile(path.join(__dirname, '../admin/build/index.html'));
  } catch (err) {
    console.log(err);
    // 클라이언트에게 에러 응답을 보냅니다.
    res.status(500).send('Internal Server Error'); // 500은 서버 오류 상태 코드입니다.
  }
});

app.listen(app.get('port'), () => {
  console.log('서버가 실행되었습니다. 포트 :: ' + app.get('port'));
});
