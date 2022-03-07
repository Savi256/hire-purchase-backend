const Usemodel=require('../model/Usemodel')
 

exports.createUser= (req,res)=>{
    try{
        const NewUser =new Usemodel({
            name:req.body.name,
            email:req.body.email,
            gender:req.body.gender,
            age:req.body.age
        })
        NewUser.save(NewUser)
        // (function(err,result){
        //     if (err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(result)
        //     }
        // })
        res.json({status:200,NewUser})
    }
    catch(error){
       res.json(error.message)
    }
}
exports.finduser =async(req,res)=>{
    try {
        const id=req.query.id
        const NewUser=await Usemodel.findById(id)

        res.json({status:200,NewUser})
        
    } catch (error) {
        res.json({status:200,message:error})
    }
}
exports.updateuser =async(req,res)=>{
    try {
        const id=req.query.id
        const updateUser=await Usemodel.findByIdAndUpdate(id,req.body,{useFindAndModify:false})  

        res.json({status:200,user:updateUser})
        
    } 
    catch (error) {
        res.json(error.message)
    }
}
exports.deleteuser =async(req,res)=>{
    try {
        const id=req.query.id
        const user=await Usemodel.findByIdAndDelete(id)  

        res.json({status:200,user})
        
    } catch (error) {
        res.json(error.message)
    }
}