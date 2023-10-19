const { Bollywood, Hollywood, Fitness, Food, Techno } = require("../DataStore/DataStore")
const BollywoodController = (req, res) => {
    return res.send(Bollywood)
}
const HollywoodController = (req, res) => {
    return res.send(Hollywood)
}
const FitnessController = (req, res) => {
    return res.send(Fitness)
}
const FoodController = (req, res) => {
    return res.send(Food)
}
const TechnologyController = (req, res) => {
    return res.send(Techno)
}
module.exports = { BollywoodController,HollywoodController,FitnessController,FoodController, TechnologyController }