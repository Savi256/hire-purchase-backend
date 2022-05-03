const express =require('express')
const router=express.Router()
const {validation}=require('../auth/auth')
const {employeeAuth}=require('../auth/employeeAuths')


const userController3=require('../controller/userController3')
const userController = require('../controller/userController');
const customProposalController = require('../controller/customProposalController');
const existingProposalController = require('../controller/existingProposalController');

//Note: the post method takes two parameter name of the path and callbackfunc from userModel mode;
router.post('/create-user',userController.createUser);
router.get('/get-user',userController.findUser);
router.put('/update-user',userController.updateUser);
router.delete('/delete-user',userController.deleteUser);


//Routes for customPropsoal
router.post('/create-custom-proposal',customProposalController.createCustomProposal);
router.get('/get-custom-proposal',customProposalController.findCustomProposal);
router.put('/update-custom-proposal',customProposalController.updateCustomProposal);
router.delete('/delete-custom-proposal',customProposalController.deleteCustomProposal);



//Routes for existingProposal
router.post('/create-existing-proposal',existingProposalController.createExistingProposal);
router.get('/get-existing-proposal',existingProposalController.findExistingProposal);
router.put('/update-existing-proposal',existingProposalController.updateExistingProposal);
router.delete('/delete-existing-proposal',existingProposalController.deleteExistingProposal);

router.post('/create-userEmployee',userController3.createUserEmployee)
router.get('/get-userEmployee',validation,userController3.finduserEmployee)
router.put('/update-userEmployee',validation,employeeAuth,userController3.updateuserEmployee)



module.exports = router;
