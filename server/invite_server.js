// module
const express = require('express');
const path = require('path');

const app = express();

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
