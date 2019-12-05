const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let tableBuku = new Schema({
    judulBuku: String,
    isbn: String,
    author: String,
    penerbit: String,
    harga: Number,
    stok: Number
})

let table_buku = mongoose.model("table_buku", tableBuku);

module.exports = Table_Buku