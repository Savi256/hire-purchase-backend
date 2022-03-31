const employee=require('../model/employee')

const employeeAuth=async(req,res,next)=>{
const employeeEmail=req.userId
try {
   await employee.findOne({email:employeeEmail}) 
} catch (error) {
    res.status(401).send("you are not an employee");
    return
}
return next()
}
module.exports={employeeAuth}