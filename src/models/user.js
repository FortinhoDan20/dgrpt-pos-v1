const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName : String,
    lastName: String,
    sex: String,
    siteAffect: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site',
        required: true
    },
    role: String,
    status: {
        type: String,
        default: "Active"
    }
},{
    timestamps: true
})


const User = mongoose.model('User', userSchema)
module.exports = User
