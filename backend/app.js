require('dotenv').config()
const express = require('express');
const app = express();


const port = 5000;

//Routes
const loginRoute = require('./routes/login')

app.use(express.json())
app.use('/', loginRoute)


app.listen(port, () => {
  console.log('welcome back!')
})
