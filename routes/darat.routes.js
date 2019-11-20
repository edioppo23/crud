const express = require('express')
const router = express.Router()
const daratModel = require("../models/darat")

router.post('/create', (req, res) => {
    let { nama_hewan, makanan, karakteristik } = req.body
    let insert_data = {
        nama_hewan, makanan, karakteristik
    }

    let data = new daratModel(insert_data)
    data.save()
    return res.send({
        status: "Succes",
        data,
        message: " Darat berhasil dimasukkan"
    })

})

router.get("/", (req, res) => {
    return res.send("Hello World sekarang ada diposisi darat routers")
})

router.get("/getAll", async (req, res) => {
    let result = await daratModel.find({}).exec()

    res.send({
        status: "Succes ",
        result,
        message: " Semua data berhasil tampil"
    })
})


router.get("/:id", async (req, res) => {
    let { id } = req.params
    let data = await daratmodel.findOne({ _id: id }).exec()
    return res.send({
        status: "Succes",
        datas,
        message: "Data detail sukses"
    })
})


// membuat update
router.put('/:id', async (req, res) => {
    let { id } = req.params
    let { nama_hewan, makanan, karakteristik } = req.body

    let update_data = {
        nama_hewan, makanan, karakteristik
    }

    try {
        let data = await daratmodel.findByIdAndUpdate(id, update_data)

        return res.status(200).json({
            status: "Succes",
            data,
            message: "Data berhasil diupdate"
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
    let query = await daratModel.findByIdAndDelete({ _id: id }).exec()

    return res.status(200).json({
        status: "Delete Berhasil",
        query,
        message: "Data berhasil dihapus"
    })
})

module.exports = router





