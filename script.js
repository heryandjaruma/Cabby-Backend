const express = require('express');
const app = express();
const port = 3000;

const { restaurants, dentists } = require('./data')

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/restaurants', (req, res) => {
    res.send(restaurants)
})

app.get('/dentists', (req, res) => {
    res.send(dentists)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
