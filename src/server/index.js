const express = require('express');
const { port } = require('../../config/server/serverConstants.js');

const app = express();

app.get('/api', (req, res) => {
  console.log('get: /api')
  res.send('get: /api');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
