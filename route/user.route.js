const userRoute = require('express').Router()
const { getAllUSers, getSingleUser } = require('../controller/user.conreoller')

// --- get all users --> get
userRoute.get(`/all`, getAllUSers)

// --- get single user --> get
userRoute.get(`/single/:id`, getSingleUser)


module.exports = userRoute