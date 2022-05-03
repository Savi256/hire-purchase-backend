const mongoose  = require('mongoose')

const existingProposal = new mongoose.Schema({
    fullName:{
      first:String,
      last:String
    },
    email:{
    type:String,
    required:true,
    unique:true
   },
   dateOfBirth:Date,
   NIN:{
    type:Number,
    unique:true,
    required:true
   },
   address:{
    type:String,
    lowercase:true,
    required:true
   },
   phoneNumber:{
    type:Number,
    unique:true,
    required:true,
   },
   stateOfOrigin:{
    type:String,
    required:true
   },
   productName:String,
   bvn:{
    type:String,
    required:true
   },
   productCategory:String
}) ;

//creacting a model and exporting it
const existingProposalModel = mongoose.model('existingProposalModel',existingProposal);
module.exports = existingProposalModel;