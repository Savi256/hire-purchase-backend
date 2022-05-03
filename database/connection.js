//this file holds functions that performs the connection to the data base
//NB; ".env" file holds our conneection string
 
const mongoose = require('mongoose');

//definning the function nb:the "process" is a global module which holds all info abt where the server is running
const connectDB = async() => {
	try{
     const dbUrl = process.env.DATABASE_URL;

//To connect to data base, you have to call the connect method of mongoose which takes two parameters
     const con = await mongoose.connect(dbUrl,{
     	useNewUrlParser:true,
     	useUnifiedTopology:true
     });
     console.log(`database running on ${con.connection.host}`)
	}
	catch(error){
     console.log(error.message)
	}
}
module.exports = connectDB;