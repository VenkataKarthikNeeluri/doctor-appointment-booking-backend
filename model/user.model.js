const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        mobile: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "doctor", "admin"]
        },
        image: {
            type: Object,
            default: { 
                url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkoyimmigration.com%2Ftimeline-category%2Fteam%2F&psig=AOvVaw2rZj6t-HLyRbon7RwhbMzl&ust=1690876938421000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCcyc-9uIADFQAAAAAdAAAAABAo"
        }
        },
        address: {
            type: Object,
            default: {}
            
        },
        isActive: {
            type: Boolean,
            default: true
        }
}, {
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)