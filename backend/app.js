const express = require('express');
const app = express();


const port = 5000;


app.get('/', (req, res) => {
  res.status(200).send('Welcome back baby')
})


app.listen(port, () => {
  console.log('welcome back!')
})
