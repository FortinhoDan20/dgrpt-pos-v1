const mongoose = require('mongoose')


const recetteSchema = new mongoose.Schema({

    amount: Number,
    treasure: Number,
    partner: Number,
    month: String,
    year: Number,

}, {  timestamps: true})


const Recette = mongoose.model('Recette', recetteSchema)
module.exports = Recette