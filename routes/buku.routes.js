const express = require("express")
const router = express.Router()
const bukumodel = require("../models/buku.model")


router.post("/create", async (req, res) => {
    let { id_buku, judul, penulis, thn_terbit,
        penerbit } = req.body
    let input_data = {
        id_buku, judul, penulis, thn_terbit,
        penerbit
    }

    let data = new bukumodel(input_data)
    data.save()

    return res.send({
        status: "Sukses",
        data,
        message: "Data buku berhasil dimasukkan"
    })

})

router.get("/", (req, res) => {
    return res.send("Hello World sekarang ada diposisi buku routers")
})

router.get("/getAll", async (req, res) => {
    let result = await bukumodel.find({}).exec()

    res.send({
        status: "Succes ",
        result,
        message: " Semua data berhasil tampil"
    })
})


router.get("/:id", async (req, res) => {
    let { id } = req.params
    let data = await bukumodel.findOne({ _id: id }).exec()
    return res.send({
        status: "Succes",
        datas,
        message: "Data detail sukses"
    })
})


// membuat update
router.put('/:id', async (req, res) => {
    let { id } = req.params
    let { id_buku, judul, penulis, thn_terbit, penerbit } = req.body

    let update_data = {
        id_buku, judul, penulis, thn_terbit, penerbit
    }

    try {
        let data = await bukumodel.findByIdAndUpdate(id, update_data)

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
    let query = await bukumodel.findByIdAndDelete({ _id: id }).exec()

    return res.status(200).json({
        status: "Delete Berhasil",
        query,
        message: "Data berhasil dihapus"
    })
})

module.exports = router