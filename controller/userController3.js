const employee=require('../model/employee')
// const {createToken}=require('../auth/auth')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config({path:'config.env'})

exports.createUserEmployee= (req,res)=>{
    try{
        const newUserEmployee =new employee({
            name:req.body.name,
            age:req.body.age,
            gender:req.body.gender,
            address:req.body.address,
            email:req.body.email,
            dateOfBirth:req.body.dateOfBirth,
            datejoined:req.body.datejoined,
            
            
        })
        newUserEmployee.save(newUserEmployee)
       console.log(newUserEmployee)
        res.json({status:200,newUserEmployee})
    }
    catch(error){ 
        console.log(error.message)
       res.json(error.message)
    }
}
// exports.authenticateEmail =async(req,res)=>{
//     try {
//         const {email}=req.body
//         const NewUser=await employee.findOne({email})

//             if(NewUser){
//                 console.log(NewUser)  
        
//                 const token=jwt.sign({
//                     email:NewUser.email
//                 },process.env.SECRET)
                
//                 NewUser.token=token
//                 console.log(NewUser.email)
//              res.json({data:NewUser})
//         return
//             }  
//             else{
//                 res.json('invalid')
//             }
       
        
//     } catch (error) {
       
//         res.json({status:400,message:"error"})
//         return
//     }
// }

exports.finduserEmployee =async(req,res)=>{
    try {
        const id=req.query.id
        const NewUser=await employee.findById(id)

        res.json({status:200,NewUser})
        
    } catch (error) {
        res.json({status:200,message:error})
    }
}
exports.updateuserEmployee =async(req,res)=>{
    try {
        const id=req.query.id
        const updateUser=await employee.findByIdAndUpdate(id,req.body,{useFindAndModify:false})  

        res.json({status:200,user:updateUser})
        
    } 
    catch (error) {
        res.json(error.message)
    }
}
exports.profile=async (req,res)=>{

res.send('profile')

    }
