const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./database/connection");

const app = express();

dotenv.config({path:'.env'})
connectDB();

//because we can't access the body in the postman we use the middleware below
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = process.env.port ||  4000;
app.use('/',require('./router/routes'));




app.get('/',(req,res) => {
    res.send("hello solobachi from express")
})

app.listen(port, () => console.log('express server is Listening on http://localhost:' + port));