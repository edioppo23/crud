const express = require('express')
const router = express.Router();
const { buat, semua } = require("../actions/Matkul/matkuls")

router.post("/create", async (req, res) => {
    try {
        let data = await buat(req)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data matkul berhasil di input"
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get("/", async (req, res) => {
    try {
        let data = await semua()

        return res.send({
            status: "Sukses",
            data,
            message: "Tampilkan semua data matkul"
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }


});

module.exports = router








