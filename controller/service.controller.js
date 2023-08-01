const { StatusCodes } = require('http-status-codes')


// get service
const getService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "get service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

// get single service
const getSingleService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "get single service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}
// add service 
const addService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "add service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}
// update service
const updateService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "update service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}
// delete service
const deleteService = async (req,res) => {
    try{
        res.status(StatusCodes.OK).json({ msg: "delete service"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

module.exports = { getService, getSingleService, addService, updateService, deleteService }