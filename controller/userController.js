//controller file is responsible for performing operation
const userModel = require('../model/userModel');

//To Post do this:
exports.createUser = (req,res) => {
 try{
  const user = new userModel({
  	name:req.body.name,
  	email:req.body.email,
  	gender:req.body.gender,
  	age:req.body.age	
  })
  user.save(user);
  res.json({
  	status:200,
  	user
  });
 }catch(error){
 	res.json(error.message)
 }
}

//To do GET do this:
exports.findUser = async(req,res) => {
try{
const id = req.query.id
const user = await userModel.findById(id);
res.json({
	status:200,
	user
})
}catch(error){
	res.json({
		status:500,
		message:error.message
	})
}
}

//TO Update do this:
exports.updateUser = async(req,res) => {
	try{
		const id = req.query.id;
		const updateUser = await userModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
		res.json({
			status:200,
			user:updateUser
		})
		/*the findByIdUpdate method has two arg  
		one: the id of the doc to be updated and 
		second: the actual data we are updating the document with*/
	}catch(error){
		res.json(error.message)
	}
}

//To Delete do this:
exports.deleteUser = async(req,res) => {
	try{
    const id = req.query.id;
    const deleteUser = await userModel.findByIdAndDelete(id);
    res.json({
    	status:200,
    	user:deleteUser
    })
	}catch(error){
    res.json(error.message)
	}
}