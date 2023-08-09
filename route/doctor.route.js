const doctorRoute = require('express').Router()
const { getDoctors,getSingleDoctor, addDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor.controller')

const auth = require('../middleware/auth.middleware')

const adminAuth = require('../middleware/admin.role')

// -- read all doctors info  --> get
doctorRoute.get(`/all`,auth, getDoctors)

// --- read single doctor info --> get
doctorRoute.get(`/single/:id`,auth, getSingleDoctor)

// --- add new doctor info --> post
doctorRoute.post(`/add`,auth, adminAuth, addDoctor)

// --- update doctor info --> patch
doctorRoute.patch(`/update/:id`,auth, updateDoctor)

// --- delete doctor info --> delete
doctorRoute.delete(`/delete/:id`,auth, adminAuth, deleteDoctor)


module.exports = doctorRoute