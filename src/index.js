const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/mongoose')




const app = express()

const port = process.env.PORT

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false  }))



app.listen(port, () => console.log(`Server started on port ${port}`))