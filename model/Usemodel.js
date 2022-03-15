const mongoose=require('mongoose')

const structure=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true},
    gender:{
        type:String 
    },
    age:{
        type:Number
    }

})
const Usemodel= mongoose.model('SAVI',structure)



module.exports=Usemodel