require('dotenv').config()
const express = require('express');
const app = express();


const connectDB = require('./db/connect')



const port = 5000;


// Middleware
const authEx = require('./middleware/auth')

//Routes
const loginRoute = require('./routes/login')
const exerciseRoute = require('./routes/exercise')

app.use(express.json())
app.use('/', loginRoute)
app.use('/exercise', authEx, exerciseRoute)

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


