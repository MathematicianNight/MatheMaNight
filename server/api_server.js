// module
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const allowedOrigins = [
  'http://localhost:4000',
  'http://localhost:5000',
  'http://13.125.111.190',
  'http://13.125.111.190:5000',
  'https://invite.mathnight.site',
];

const options = {
  // origin: allowedOrigins, // 접근 권한을 부여하는 도메인
  // credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  // optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
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

/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */

/**
 * @path {GET} https://api.mathnight.site
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */
app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//-- API --//
// Get handler
const greeting = require('./routers/greeting.js');
const like_api = require('./routers/like_api.js');
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
