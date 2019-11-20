const mongose = require("mongoose")
const Schema = mongose.Schema

let amfibiSchema = new Schema({
    nama_hewan: String,
    jenis_kelamin: String,
    karakteristik: String

})

let amfibi = mongose.model("amfibi", amfibiSchema)
module.exports = amfibi