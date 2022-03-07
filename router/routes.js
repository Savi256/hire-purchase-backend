const express =require('express')
const router=express.Router()

const userController=require('../controller/userController')

router.post('/create-user',userController.createUser)
router.get('/get-user',userController.finduser)
router.put('/update-user',userController.updateuser)
router.delete('/delete-user',userController.deleteuser)

 module.exports=router
