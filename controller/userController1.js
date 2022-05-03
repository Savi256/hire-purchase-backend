const proposal=require('../model/proposalforexistingproduct')

exports.createUser1=(req,res)=>{
    try{
        const NewUser1 =new proposal({
            fullname:req.body.fullname,
            email:req.body.email,
            gender:req.body.gender,
            address:req.body.address,
            dateOfBirth:req.body.dateOfBirth,
            stateOfOrigin:req.body.stateOfOrigin,
            BVN:req.body.BVN,
            NIN:req.body.NIN,
            photo:req.body.photo,
            guarantorDetails:req.body.guarantorDetails,
            Product:req.body.Product
            
        })
    
        NewUser1.save(NewUser1)
        res.json({status:200,NewUser1})
    }
    catch(error){
        res.json(error.message)
     }

}

exports.finduser =async(req,res)=>{
    try {
        const id=req.query.id
        const NewUser=await proposal.findById(id)

        res.json({status:200,NewUser})
        
    } catch (error) {
        res.json({status:200,message:error})
    }
}
exports.updateuser =async(req,res)=>{
    try {
        const id=req.query.id
        const updateUser=await proposal.findByIdAndUpdate(id,req.body,{useFindAndModify:false})  

        res.json({status:200,user:updateUser})
        
    } 
    catch (error) {
        res.json(error.message)
    }
}
exports.deleteuser =async(req,res)=>{
    try {
        const id=req.query.id
        
        const user=await proposal.findByIdAndDelete(id)  

        res.json({status:200,user})
        
    } catch (error) {
        res.json(error.message)
    }
}