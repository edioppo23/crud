const express = require('express')
const router = express.Router()
const buahModel = require("../models/buah")



// 1. Membuat data

router.post('/createbuah', (req, res) => {
    let { nama, warna, rasa } = req.body
    let insert_data = { nama, warna, rasa }


    let data = new buahModel(insert_data)
    data.save()
    return res.send({
        status: "Succes",
        data,
        message: " Buah berhasil dimasukkan"

    })

})

// 2. Menampilkan semua data buah
router.get("/getAllBuah", async (req, res) => {
    let result = await buahModel.find({}).exec()

    res.send({
        status: "Succes",
        result,
        message: "Buah berhasil ditampilkan semua"
    })
})

module.exports = router