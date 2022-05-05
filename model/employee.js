const mongoose=require('mongoose')
const { token } = require('morgan')

const structure3=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },age:{
        type:Number
    },
    gender:{
        type:String,
        required:true
    },
    address:{   
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
        required:true,
        
    },
    datejoined:{
        type:String,
        required:true,
    },
    token:{
        type:String
    }
   
    
    

})
const employee= mongoose.model('EMPLOYEEEE',structure3)



module.exports=employee