const proposalNotListed=require('../model/productsNotListed')

exports.createUser2=(req,res)=>{
    try{
        const NewUser2=new proposalNotListed({
            fullname:req.body.fullname,
            email:req.body.email,
            address:req.body.address,
            dateOfBirth:req.body.dateOfBirth,
            stateOfOrigin:req.body.stateOfOrigin,
            BVN:req.body.BVN,
            phoneNumber:req.body.phoneNumber,
            NIN:req.body.NIN,
            ProductName:req.body.ProductName,
            productCategory:req.body.productCategory
            
        })
    
        NewUser2.save(NewUser2)
        res.json({status:200,NewUser2})
    }
    catch(error){
        res.json(error.message)
     }

}

exports.finduser =async(req,res)=>{
    try {
        const id=req.query.id
        const NewUser=await proposalNotListed.findById(id)

        res.json({status:200,NewUser})
        
    } catch (error) {
        res.json({status:200,message:error})
    }
}
exports.updateuser =async(req,res)=>{
    try {
        const id=req.query.id
        const updateUser=await proposalNotListed.findByIdAndUpdate(id,req.body,{useFindAndModify:false})  

        res.json({status:200,user:updateUser})
        
    } 
    catch (error) {
        res.json(error.message)
    }
}
exports.deleteuser =async(req,res)=>{
    try {
        const id=req.query.id
        const user=await proposalNotListed.findByIdAndDelete(id)  

        res.json({status:200,user})
        
    } catch (error) {
        res.json(error.message)
    }
}