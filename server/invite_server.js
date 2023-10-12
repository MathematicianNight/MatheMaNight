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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger
const { swaggerUi, specs } = require('./swagger/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Run server
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */

/**
 * @path {GET} http://localhost:4000/
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
app.get('/', (req, res) => {
  //Hello World 데이터 반환
  res.send('Hello World');
});

//-- API --//
// Get handler
const greeting = require('./routers/greeting.js');
const like_api = require('./routers/like_api.js');
const aboutus = require('./routers/aboutus.js');
const question_api = require('./routers/question_api.js');
const calendar = require('./routers/calendar.js');

// Using handler

/**
 * @swagger
 * tags:
 *   name: Greeting
 *   description: 인사말
 */
app.use('/greeting', greeting);

/**
 * @swagger
 * tags:
 *   name: Like
 *   description: 좋아요 기능
 */
app.use('/like', like_api);

/**
 * @swagger
 * tags:
 *   name: AboutUs
 *   description: 만든 사람들
 */
app.use('/aboutus', aboutus);

/**
 * @swagger
 * tags:
 *   name: QnA
 *   description: 수밤에 관한 질의응답
 */
app.use('/question', question_api);

/**
 * @swagger
 * tags:
 *   name: Calendar
 *   description: 캘린더 저장
 */
app.use('/calendar', calendar);
