const express = require('express')
const router = express.Router()
const amfibiModel = require("../models/amfibi")




// 1. Membuat data
router.post('/create', (req, res) => {
    let { nama_hewan, jenis_kelamin, karakteristik } = req.body
    let insert_data = {
        nama_hewan, jenis_kelamin, karakteristik
    }

    let data = new amfibiModel(insert_data)
    data.save()
    return res.send({
        status: "Succes",
        data,
        message: " Amfibi berhasil dimasukkan"
    })

})


//2.  menampilkan semua data
router.get("/getAll", async (req, res) => {
    let result = await amfibiModel.find({}).exec()

    res.send({
        status: "Succes ",
        result,
        message: " Semua data amfibi berhasil tampil"
    })
})


router.get("/:id", async (req, res) => {
    let { id } = req.params
    let data = await amfibiModel.findOne({ _id: id }).exec()
    return res.send({
        status: "Succes",
        datas,
        message: "Data amfibi detail sukses"
    })
})


// membuat update
router.put('/:id', async (req, res) => {
    let { id } = req.params
    let { nama_hewan, jenis_kelamin, karakteristik } = req.body

    let update_data = {
        nama_hewan, jenis_kelamin, karakteristik
    }

    try {
        let data = await amfibiModel.findByIdAndUpdate(id, update_data)

        return res.status(200).json({
            status: "Succes",
            data,
            message: "Data amfibi berhasil diupdate"
        })

    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})


// Membuat Delete
router.delete('/:id', async (req, res) => {
    let { id } = req.params
    let query = await amfibiModel.findByIdAndDelete({ _id: id }).exec()

    return res.status(200).json({
        status: "Delete Berhasil",
        query,
        message: "Data berhasil dihapus"
    })
})

module.exports = router


