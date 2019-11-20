const mongoose = require("mongoose")
const Schema = mongoose.Schema

let buahSchema = new Schema({
    nama: String,
    warna: String,
    rasa: String
})

let buah = mongoose.model("buah", buahSchema)

module.exports = buah