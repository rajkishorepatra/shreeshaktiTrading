const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(3000, () => {
  console.log('Backend server is listening on port 3000!');
});
