// module
const express = require('express');
const cors = require('cors');
const app = express();

const options = {
  origin: 'http://localhost:3000', // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

// Middleware
app.use(cors(options));

// Run server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//-- API --//
// Get handler
const greeting = require('./routes/greeting.js');
const like_api = require('./routes/like_api.js');
const aboutus = require('./routes/aboutus.js');
const question_api = require('./routes/question_api.js');

// Using handler
app.use('/greeting', greeting);
app.use('/like', like_api);
app.use('/aboutus', aboutus);
app.use('/question', question_api);
