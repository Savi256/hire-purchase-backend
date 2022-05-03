const mongoose  = require('mongoose')

const customProposal = new mongoose.Schema({
    fullName:{
      first:String,
      last:String
    },
    email:{
    type:String,
    required:true,
    unique:true
   },
   gender:String,
   address:{
    type:String,
    lowercase:true,
    required:true
   },
   dateOfBirth:{
    type:Date,
    required:true,
    unique:true
   },
   stateOfOrigin:String,
   bvn:{
    type:String,
    required:true,
    unique:true
   },
   NIN:{
    type:Number,
    required:true,
    unique:true
   },
   photo:String,
   guarantorDetails:{
    name:{
      type:String,
      required:true
    },
    phoneNumber:{
      type:Number,
      required:true
    },
    address:{
      type:String,
      required:true,
      unique:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    }
   },
   product:{
    name:{
      type:String,
      required:true
    },
    price:String,
    term :{
      type:String,
      required:true
    },
    type:{
      type:String,
    },
    numberOfProduct:{
      type:Number,
      required:true
    },
    category:{
      type:String,
      required:true
    }
  }
}) ;

//creacting a model and exporting it
const customProposalModel = mongoose.model('customProposalModel',customProposal);
module.exports = customProposalModel;