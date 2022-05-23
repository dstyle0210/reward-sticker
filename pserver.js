// 퍼블리싱 용 심플 서버(Express)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("publish"));
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
});
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});