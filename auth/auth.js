const {sign,verify}=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config({path:'config.env'})


// const createToken=(user)=>{
//     const token=sign(
//         {
//             email:user.email
//         }
//     ,"mySecret"
//     )
//     return token
// }

const validation=(req,res,next)=>{
    const accessToken= req.body.token || req.header('auth-token')
    console.log(accessToken)
    
    if(!accessToken){

       return res.send({status:404,error:'invalid authentication'})
    }
  
try {
 const validate=verify(accessToken,process.env.SECRET)
req.userId=validate

} catch (err) {
res.json({status:404,error:'err'})
return    
}   
return next()

}        

module.exports={validation}