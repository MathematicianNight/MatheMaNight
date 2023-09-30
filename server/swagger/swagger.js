const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: '청초한 절친',
      description: '수학인의 밤 초대장',
    },
    servers: [
      {
        url: 'http://localhost:4000', // 요청 URL
      },
    ],
  },
  apis: ['./*.js', './routers/*.js'], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
