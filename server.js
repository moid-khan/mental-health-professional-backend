const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//importing routes
const userRoutes = require('./routes/users')
const sessionRoutes = require('./routes/sessions')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//import connection from kess.js
const keys = require('./keys')


const PORT = process.env.PORT || 5000

//Adding Routes
app.use('/users', userRoutes)
app.use('/sessions', sessionRoutes)

app.get('/',(req,res)=>{
    res.send('Welcome to Mental Health Professional App')
})


//connect to mongoDB
mongoose.connect(keys.connection, () => {
console.log('connected to mongoDB')    
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})