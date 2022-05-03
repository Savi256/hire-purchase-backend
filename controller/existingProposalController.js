//controller file is responsible for performing operation
const existingProposalModel = require('../model/existingProposalModel');

//To Post do this:
exports.createExistingProposal = (req,res) => {
 try{
  const existingProposal = new existingProposalModel({
  	fullName:req.body.fullName,
  	email:req.body.email,
  	dateOfBirth:req.body.dateOfBirth,
  	NIN:req.body.NIN,
  	address:req.body.address,
  	phoneNumber:req.body.phoneNumber,
  	stateOfOrigin:req.body.stateOfOrigin,
  	bvn:req.body.bvn,
  	productName:req.body.productName,
  	productCategory:req.body.productCategory	
  })
  existingProposal.save(existingProposal);
  res.json({
  	status:200,
  	existingProposal
  });
 }catch(error){
 	res.json(error.message)
 }
}

//To do GET do this:
exports.findExistingProposal = async(req,res) => {
try{
const id = req.query.id
const existingProposal = await existingProposalModel.findById(id);
res.json({
	status:200,
	existingProposal
})
}catch(error){
	res.json({
		status:500,
		message:error.message
	})
}
}

//TO Update do this:
exports.updateExistingProposal = async(req,res) => {
	try{
		const id = req.query.id;
		const updateExistingProposal = await existingProposalModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
		res.json({
			status:200,
			existingProposal:updateExistingProposal
		})
		/*the findByIdUpdate method has two arg  
		one: the id of the doc to be updated and 
		second: the actual data we are updating the document with*/
	}catch(error){
		res.json(error.message)
	}
}

//To Delete do this:
exports.deleteExistingProposal = async(req,res) => {
	try{
    const id = req.query.id;
    const deleteExistingProposal = await existingProposalModel.findByIdAndDelete(id);
    res.json({
    	status:200,
    	existingProposal:deleteExistingProposal
    })
	}catch(error){
    res.json(error.message)
	}
}