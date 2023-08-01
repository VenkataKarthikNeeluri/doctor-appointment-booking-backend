const serviceRoute = require('express').Router()
const { getService, getSingleService, addService, updateService, deleteService } = require('../controller/service.controller')

// --- read all services  --> get
serviceRoute.get(`/all`, getService)

// --- read single servive  --> get
serviceRoute.get(`/single/:id`, getSingleService)

// --- add new service --> post
serviceRoute.post(`/add`, addService)

// ---update service --> patch
serviceRoute.patch(`/update/:id`, updateService)

// --- delete service --> delete
serviceRoute.delete(`/delete/:id`, deleteService)


module.exports = serviceRoute