
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/yolo', (req, res) => {
  res.status(418).send('I bet you thought I was real');
});

app.listen(port, () => console.log(`Here we are. Back again. ${port}`));
