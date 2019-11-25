const express = require('express')
const router = express.Router();
const {
    buat,
    semua,
    ubah,
    hapus
} = require("../actions/Matkul/matkuls")


// 1. Membuat data / create data
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

// 2. Menampilkan semua data =================
router.get("/getAll", async (req, res) => {
    try {
        let data = await semua(req)

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

// 3. Membuat 1 data tampil  ===================
router.get("/:id", async (req, res) => {
    try {
        let {
            id
        } = req.params
        let data = await detail(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Detail data mata kuliah berhasil diinput"
        })

    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});


// 4. Membuat update data / mengubah data ==================

router.put("/:id", async (req, res) => {
    let {
        id
    } = req.params
    let update_data = {
        nomatkul: req.body.matkul,
        namamatkul: req.body.namamatkul,
        dosen: req.body.dosen,
        semester: req.body.semester

    }
    try {
        let data = await ubah(id, update_data)
        return res.status(200).json({
            status: "Sukses ",
            data,
            message: "Data dosen berhasil diubah"
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            data,
            message: err.message
        })
    }
})


// 5. Menghapus data
router.delete("/:id", async (req, res) => {
    let {
        id
    } = req.params

    try {
        let data = await hapus(id)

        return res.status(200).json({
            status: "Sukses",
            data,
            message: "Data dosen berhasil dihapus"
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});





module.exports = router