const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unque: true 
    },
    mobile: {
        type: String,
        required: true,
        unque: true
    },
    image: {},
    doctorId: {},
    department: {},
    qualification: {},
    description: {},
    experience: {},
    address: {}
},{
    collection: "doctors",
    timestamps: true
})


module.exports = mongoose.model("Doctor", doctorSchema)