const mongoose=require('mongoose')
const structure2=new mongoose.Schema({
    fullname:{
        type: String,
        required:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    address:{
        type:String,
        required:true

    },
    dateOfBirth:{
        type:Date,
        required:true,
        unique:true
    },
    stateOfOrigin:{
        type:String,
        required:true

    },
    BVN:{
        type:Number,
        required:true,
        unique:true
    },
    phoneNumber:
    {
        type:Number,
        required:true,
        unique:true
    },
    NIN:{
        type:Number,
        required:true,
        unique:true
    },

    ProductName:
    {
        type:String,
    required:true},

    productCategory:
    {
        type:String,
        required:true
    }
  


})

const proposalNotListed=  mongoose.model('proposal not listed in the platform',structure2)

module.exports=proposalNotListed