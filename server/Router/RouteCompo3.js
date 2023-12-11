const route=require('express').Router()

const {Register,login}=require('../controller/controllerUser')
const authMiddleware = require('../middleware/authmiddleware')
route.get('/dashboard',authMiddleware,(req,res)=>{
    res.send({msg:"this is home page"})
})
route.post ('/register',Register)
route.post('/login',login)
module.exports=route

