const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

// controller
const auth = async(req,res,next) => {
    try {
        const token = req.header('Authorization')

        if(!token)
             return res.status(StatusCodes.NOT_FOUND).json({ msg:'Token Not Found'})

        jwt.verify(token,process.env.API_ACCESS_SECRET, (err,resp) => {
            if(err)
                return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Token expired.. Login Again"})

                // assigning user id to req variable
            req.userId = resp._id 

                next()    // transfor response to next controller 
                //res.json({ resp })
        })
        
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = auth