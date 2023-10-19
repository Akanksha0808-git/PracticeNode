const routes= require('express').Router()
const {BollywoodController,HollywoodController,FoodController,FitnessController,TechnologyController}=require('../controller/categoryController')

routes.get('/bollywood',BollywoodController)
routes.get('/hollywood',HollywoodController)
routes.get('/food',FoodController)
routes.get('/fitness',FitnessController)
routes.get('/techno',TechnologyController)


module.exports=routes