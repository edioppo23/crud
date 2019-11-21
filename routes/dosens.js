const express = require('express');
const router = express.Router();
const { buat, semua, detail, ubah, hapus } = require("../actions/Dosen/dosens");


// 1. Membuat data / create data
router.post("/create", async (req, res) => {
    try {
        let data = await buat(req)
        return res.status(200).json({ // 200 json adalah respon berhasil
            status: "sukses",
            data,
            message: " Data dosen berhasil dibuat"
        })
    } catch (err) {
        return res.status(400).json({ // 4400 json adalah respon error
            status: "Error",
            message: err.message
        })
    }
});

router.get("/getAll", async (req, res) => {
    try {
        let data = await semua()
        return res.send({
            status: "sukses",
            data,
            message: " Semua data berhasil ditampilkan"

        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            data,
            message: err.message
        })
    }
});

// Membuat data tampil semua ===================
router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await detail(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Derail data dosen"
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});


// Membuat update data / mengubah data ====================

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let update_data = {
        nik: req.body.nik,
        nama: req.body.nama,
        email: req.body.email,
        tlp: req.body.telp,
        matkul: req.body.matkul
    }
    try {
        let data = await ubah(id, update_data)
        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data dosen berhasil diubah"
        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }

});

// Menghapus data =========================================
router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await hapus(id)
        return res.status(200).json({
            status: "sukses",
            data,
            message: "Data dosen berhasil dihapus"

        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
});

module.exports = router




