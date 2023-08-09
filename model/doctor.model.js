const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
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
    image: {
        type: Object,
        default: { 
            url: "https://tse4.mm.bing.net/th?id=OIP.KtahHX0mDy-mEQO16gKJdAAAAA&pid=Api&P=0&h=180" }
    },
    doctorId: {
        type: String,
        unque: true,
        default: ""
    },
    department: {
        type: String,
        default: ""
    },
    qualification: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    experience: {
        type: Number,
        default: 0
    },
    address: {
        type: Object,
        default: {
            city: "test city"
        }
    }
},{
    collection: "doctors",
    timestamps: true
})


module.exports = mongoose.model("Doctor", doctorSchema)