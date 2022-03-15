const express =require('express')
const router=express.Router()

const userController=require('../controller/userController')
const userController1=require('../controller/userController1')
const userController2=require('../controller/userController2')


router.post('/create-user',userController.createUser)
router.get('/get-user',userController.finduser)
router.put('/update-user',userController.updateuser)
router.delete('/delete-user',userController.deleteuser)
router.post('/create-productslisted',userController1.createUser1)
router.get('/get-productslisted', userController1.createUser1)
router.put('/update-productslisted', userController1.createUser1)
router.delete('/delete-productslisted', userController1.createUser1)
router.post('/create-productsNotListed',userController2.createUser2)
router.get('/get-productsNotListed',userController2.createUser2)
router.put('/update-productsNotListed',userController2.createUser2)
router.delete('/delete-productsNotListed',userController2.createUser2)



 module.exports=router
