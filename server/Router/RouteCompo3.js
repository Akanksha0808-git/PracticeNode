const route=require('express').Router()

const {Register,login,fetchData}=require('../controller/userController')
route.get('/fetchAllDetails',fetchData)
route.post ('/Register',Register)
route.get('/Login',login)
module.exports=route

