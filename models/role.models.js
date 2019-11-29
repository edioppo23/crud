const mongoose = require("mongoose")
const Schema = mongoose.Schema;


let roleSchema = new Schema({
    name: { type: String, unique: true, required: true },
    menu: { type: String },

    created_at: { type: Array, default: Date.now() },
    update_at: { type: Date, default: Date.now() },
    deleted_at: { type: Date, default: null }
});


let role = mongoose.model("Role", roleSchema);
module.exports = role; 