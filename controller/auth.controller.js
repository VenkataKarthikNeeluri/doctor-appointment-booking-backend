 const { StatusCodes } = require('http-status-codes')
 const User = require('../model/user.model')
 
// register
    const register = async (req,res) => {
        try{

            const extEmail = await User.findOne({ email: req.body.email })
                if(extEmail)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${req.body.email} already exists`})

            const extMobile = await User.findOne({ mobile: req.body.mobile})
                if(extMobile)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${req.body.mobile} already exists`})

            const newUser = await User.create (req.body) 

            return res.status(StatusCodes.OK).json({ msg: `user registered successfully`,newUser })
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
        }
    }
// logic
const login = async (req,res) => {
        try{
            res.status(StatusCodes.OK).json({ msg: "login"})
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
        }
    }
// logout
const logout = async (req,res) => {
        try{
            res.status(StatusCodes.OK).json({ msg: "logout"})
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
        }
    }
// token
const getToken = async (req,res) => {
        try{
            res.status(StatusCodes.OK).json({ msg: "get token"})
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
        }
    }
// current logged user info
const loggedUser = async (req,res) => {
        try{
            res.status(StatusCodes.OK).json({ msg: "logged user"})
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
        }
    }

    module.exports = { register, login, logout, getToken, loggedUser }