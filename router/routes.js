const express =require('express')
const router=express.Router()
const {validation}=require('../auth/auth')
const {employeeAuth}=require('../auth/employeeAuths')


const userController=require('../controller/userController')
const userController1=require('../controller/userController1')
const userController2=require('../controller/userController2')
const userController3=require('../controller/userController3')


router.post('/create-user',userController.createUser)
router.get('/get-user',userController.finduser)
router.put('/update-user',userController.updateuser)
router.delete('/delete-user',userController.deleteuser)

router.post('/create-productslisted',userController1.createUser1)
router.get('/get-productslisted', userController1.finduser)
router.put('/update-productslisted', userController1.updateuser)
router.delete('/delete-productslisted', userController1.deleteuser)

router.post('/create-productsNotListed',userController2.createUser2)
router.get('/get-productsNotListed',userController2.finduser)
router.put('/update-productsNotListed',userController2.updateuser)
router.delete('/delete-productsNotListed',userController2.deleteuser)

router.post('/create-userEmployee',userController3.createUserEmployee)
router.get('/get-userEmployee',validation,userController3.finduserEmployee)
router.put('/update-userEmployee',validation,employeeAuth,userController3.updateuserEmployee)




module.exports=router
