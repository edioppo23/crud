const mongoose = require("mongoose")
const Schema = mongoose.Schema

let daratSchema = new Schema({
    nama_hewan: String,
    makanan: String,
    karakteristik: String
})

let darat = mongoose.model("darat", daratSchema)
module.exports = darat