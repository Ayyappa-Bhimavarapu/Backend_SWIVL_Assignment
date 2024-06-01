const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://ayyappa:T163bLJyShgXOp67@cluster0.vmswg9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(9000, () => {
    console.log('Server started')
})