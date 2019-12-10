const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let tableBukuSchema = new Schema({
    idBuku: { type: Number, default: null },
    judulBuku: { type: String, required: true, unique: true, default: null },
    author: { type: String, required: true, default: null },
    penerbit: { type: String, default: null },
    harga: { type: Number, required: true, default: null },
    stok: { type: Number, default: 0 },

    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    deleted_at: { type: Date, default: null }
})

let Table_Buku = mongoose.model("Table_Buku", tableBukuSchema);

module.exports = Table_Buku

