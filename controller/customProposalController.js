//controller file is responsible for performing operation
const customProposalModel = require('../model/customProposalModel');
const customemail =require('../email/customemail')
// const nodemailer = require("nodemailer");

//To Post do this:
exports.createCustomProposal = async (req,res) => {
 try{
  const customProposal = new customProposalModel({
  	fullName:req.body.fullName,
  	email:req.body.email,
  	gender:req.body.gender,
  	address:req.body.address,
  	dateOfBirth:req.body.dateOfBirth,
  	stateOfOrigin:req.body.stateOfOrigin,
  	bvn:req.body.bvn,
  	NIN:req.body.NIN,
  	photo:req.body.photo,
  	guarantorDetails:req.body.guarantorDetails,
  	product:req.body.product	
  })
  customProposal.save(customProposal);
  await customemail(customProposal.email)
  res.json({
  	status:200,
  	customProposal
  });
  return
 }catch(error){
 	res.json(error.message)
 }
}

//To do GET do this:
exports.findCustomProposal = async(req,res) => {
try{
const id = req.query.id
const customProposal = await customProposalModel.findById(id);
res.json({
	status:200,
	customProposal
})
return
}catch(error){
	res.json({
		status:500,
		message:error.message
	})
}
}

//TO Update do this:
exports.updateCustomProposal = async(req,res) => {
	try{
		const id = req.query.id;
		const updateCustomProposal = await customProposalModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
		res.json({
			status:200,
			customProposal:updateCustomProposal
		})
		return
		/*the findByIdUpdate method has two arg  
		one: the id of the doc to be updated and 
		second: the actual data we are updating the document with*/
	}catch(error){
		res.json(error.message)
	}
}

//To Delete do this:
exports.deleteCustomProposal = async(req,res) => {
	try{
    const id = req.query.id;
    const deleteCustomProposal = await customProposalModel.findByIdAndDelete(id);
    res.json({
    	status:200,
    	customProposal:deleteCustomProposal
    })
	return
	}catch(error){
    res.json(error.message)
	}
}