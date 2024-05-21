const mongoose = require('mongoose')



const siteSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    sex: String,
    ticket: Number,
    Nbr_Agent: Number,
    status: {
        type: String,
        default: "En activité"
    }


}, {
    timestamps: true
})


const Site = mongoose.model('Site', siteSchema)
module.exports = Site 