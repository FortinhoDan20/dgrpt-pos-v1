const mongoose = require("mongoose")



const assujetSchema = mongoose.Schema({
    numQuitt: Number,
    assujettis: String,
    actGenerating: String,
    NbrAct: String,
    amount:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amountLetter: String,
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        default: "En attente d'impression"
    }
},{
    timestamps: true
})

const Assujttis = mongoose.model('Assujttis', assujetSchema )
module.exports = Assujttis
