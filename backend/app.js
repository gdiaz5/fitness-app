require('dotenv').config()
const express = require('express');
const app = express();


const connectDB = require('./db/connect')



const port = 5000;

//Routes
const loginRoute = require('./routes/login')

app.use(express.json())
app.use('/', loginRoute)


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server listening on port ${port}...`)
    })
  } catch(error) {
    console.log(error)
  }
}

start()


