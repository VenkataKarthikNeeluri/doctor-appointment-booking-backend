   const { StatusCodes } = require('http-status-codes')
   const User = require('../model/user.model')


// All registered users
  const allRegUsers = async (req,res) => {
        try{

            let allUsers = await User.find({})

            let fUsers = allUsers.filter((item) => item.role !== "superadmin")

            res.status(StatusCodes.OK).json({ length: fUsers.length, users: fUsers })  // allUsers -> length: allUsers.length, allUsers
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
  
// All registered doctors
const allRegDoctors = async (req,res) => {
        try{
            let allUsers = await User.find({})

            let fDoctors = allUsers.filter((item) => item.role === "doctor")

            res.status(StatusCodes.OK).json({ length: fDoctors.length, doctors: fDoctors })
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
  
// All appointments
const allAppointments = async (req,res) => {
        try{
            res.status(StatusCodes.OK).json({ msg: "all appointments"})
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
  
// managing roles
const changeRole = async (req,res) => {
        try{
            let { userId } = req.body 

            let extUser = await User.findById({ _id: userId })
                if(!extUser)
                    return res.status(StatusCodes.NOT_FOUND).json({ msg: `requested user id not exists.`})

                await User.findByIdAndUpdate({ _id: userId }, {role: req.body.role })

            res.status(StatusCodes.OK).json({ msg: `User Role updated succesfullyy..` })
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }

    module.exports = { allRegUsers, allRegDoctors, allAppointments, changeRole }
  