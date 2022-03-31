const express =require('express')
const dotenv=require('dotenv')
const cookies=require('cookie-parser')

// const MongoClient = require('mongodb').MongoClient
const mongoose=require('mongoose')
// const bodyParser= require('body-parser')

const app=express()
app.use(cookies())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use('/',require('./router/routes'))



dotenv.config({path:'config.env'})
const DATA=process.env.DATABASE_URL
const PORT=process.env.PORT||8080   

app.get('/',(req,res)=>{
    res.json('hello client')
})

mongoose.connect(DATA,{useUnifiedTopology:true,useNewUrlParser:true})
.then((client)=> {
console.log('client connected')})


.catch((error)=>console.error(error))

app.listen(PORT,()=>{console.log(`port is working properly http://localhost:${PORT}`)}) 
