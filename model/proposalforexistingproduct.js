const mongoose=require('mongoose')
const structure1=new mongoose.Schema(
    {
        fullname:{
            type: String,
            required:true
        }, 
        email:{
            type:String,
            required:true,
            unique:true
        },
        gender:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true

        },
        dateOfBirth:{
            type:Date,
            required:true,
            
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
        
        NIN:{
            type:Number,
            required:true,
            unique:true
        },
        photo:{
            type:String,
            required:true,
            unique:true
        }
        ,
        guarantorDetails:{
         guarantorName:{type:String,required:true},
         phoneNumber:{type:Number,required:true,unique:true},
         address:{type:String,required:true},
         email:{type:String,required:true,unique:true}  
    },
    Product:{
        ProductName:{type:String, required:true},
        ProductPrice:{type:String,required:true},
        applicationTerm:{type:String,required:true},      
        applicationType:{type:String,required:true},
        numberOfProducts:{type:Number}
    }
}
)
const proposal=mongoose.model('proposal with existing products',structure1)

module.exports=proposal 