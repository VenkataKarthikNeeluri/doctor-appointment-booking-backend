const { getAppointments, addAppointment, getSingleAppointment, updateAppointment, deleteAppointment} = require('../controller/appointment.controller')

const appointmentRoute = require('express').Router()

// --- read all - get ---
appointmentRoute.get(`/all`, getAppointments)

// read single
appointmentRoute.get(`/single/:id`, getSingleAppointment)

// --- create appointment -- post --
appointmentRoute.post(`/add`, addAppointment)

// -- edit appointments ---
appointmentRoute.patch(`/update/:id`, updateAppointment)

// --- delete appointments ---
appointmentRoute.delete(`/delete/:id`, deleteAppointment)

module.exports = appointmentRoute




