
const { StatusCodes } = require('http-status-codes')
const Doctor = require('../model/doctor.model')


// get doctor 
const getDoctors = async (req,res) => {
    try{
        let doctors = await Doctor.find({})
        res.status(StatusCodes.OK).json({ length: doctors.length, doctors })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

// get single doctor
const getSingleDoctor = async (req,res) => {
    try{
        let id = req.params.id 
        let extDoc = await Doctor.findById({ _id: id })
        if(!extDoc)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "Requested doctor id not found"})
        res.status(StatusCodes.OK).json({ doctor: extDoc })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

// add doctor
const addDoctor = async (req,res) => {
    try{
            let { email, mobile } = req.body 

            if(!req.body)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Empty data not allowed`})

            let extEmail = await Doctor.findOne({ email })
                if(extEmail)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${email} already exists`})

            let extMobile = await Doctor.findOne({ mobile })
                if(extMobile)
                    return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${mobile} already exists`})

                    await Doctor.create(req.body)

        res.status(StatusCodes.OK).json({ msg: " doctor details added successfully"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

// update doctor
const updateDoctor = async (req,res) => {
    try{
        let id = req.params.id 

        let { email, mobile } = req.body 

        let extEmail = await Doctor.findOne({ email })
            if(extEmail)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${email} already exists`})

        let extMobile = await Doctor.findOne({ mobile })
            if(extMobile)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${mobile} already exists`})

            await Doctor.findByIdAndUpdate({ _id: id }, req.body)

        res.status(StatusCodes.OK).json({ msg: "doctor info updateed successfully"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

// delete doctor
const deleteDoctor = async (req,res) => {
    try{

        let id = req.params.id 

        const extDoc = await Doctor.findById({ _id : id })
            if(!extDoc)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `requested doctor id not found` })

                await Doctor.findByIdAndDelete({ _id : id })

        res.status(StatusCodes.OK).json({ msg: "doctor info deleted successfully"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mag: err.message })
    }
}

module.exports = { getDoctors,getSingleDoctor, addDoctor, updateDoctor, deleteDoctor }
