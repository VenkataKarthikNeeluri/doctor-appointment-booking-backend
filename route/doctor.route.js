const doctorRoute = require('express').Router()
const { getDoctors,getSingleDoctor, addDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor.controller')

// -- read all doctors info  --> get
doctorRoute.get(`/all`, getDoctors)

// --- read single doctor info --> get
doctorRoute.get(`/single/:id`, getSingleDoctor)

// --- add new doctor info --> post
doctorRoute.post(`/add`,addDoctor)

// --- update doctor info --> patch
doctorRoute.patch(`/update/:id`, updateDoctor)

// --- delete doctor info --> delete
doctorRoute.delete(`/delete/:id`, deleteDoctor)


module.exports = doctorRoute