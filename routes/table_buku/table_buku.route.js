const express = require('express');
const router = express.Router();
const { create, getAll, getDetail, update, destroy } = require("../../actions/Table_buku/Table_Buku.action");
const { check, validationResult } = require('express-validator')

// 1. Membuat data ============================
router.post('/',
    [
        check('judulBuku')
            .not()
            .isEmpty(),
        check('author')
            .not()
            .isEmpty(),
        check('harga')
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req)

        if (!error.isEmpty()) {
            return res.send({
                code: 400,
                status: "Error",
                message: errors.array()
            })
        } try {
            let data = await new CreateBook(req).exec()
            return res.send({
                code: 201,
                status: "Success",
                message: " Create data Success",
                data
            })

        } catch (err) {
            return res.send({
                code: 400,
                status: "Something went wrong",
                message: err.message
            })
        }
    }
)

// 2. Menampilkan data ====================

router.get("/getAll",
    async (req, res) => {
        try {
            let data = await getAll(req).exec()

            return res.send({
                code: 200,
                status: "Sukses",
                data
            })
        } catch (err) {
            return res.send({
                code: 400,
                status: "something went wrong",
                message: err.message
            })
        }
    });

// 3. Menampilkan salah satu data berdasarkan id ======================

router.get("/",
    async (req, res) => {
        try {
            let data = await BookDetail(req).exec()
            return res.send({
                code: 200,
                status: "Sukses",
                data,
            })
        } catch (err) {
            return res.send({
                code: 400,
                status: "Something went wrong",
                message: err.message
            })
        }
    });

// 4. Merubah data ===========================
router.put("/:id",
    async (req, res) => {
        try {
            let { id } = req.params
            let data = await new UpdateBook(id, req).update()

            return res.send({
                code: 200,
                status: " Sukses ",
                message: " Data berhasil diupdate",
                data
            })

        } catch (err) {
            return res.send({
                code: 400,
                status: " something went wrong",
                message: err.message
            })
        }
    });


// 5. Menghapus data =========================

router.delete("/:id",
    async (req, res) => {


        try {
            let { id } = reg.params
            let data = await new DeleteBook(id).delete()

            return res.send({
                code: 200,
                status: "sukses",
                message: "Data berhasil dihapus",
                data
            })
        } catch (err) {
            return res.send({
                code: 400,
                status: " Something went wrong",
                message: err.message
            })
        }
    })

router.get

module.exports = router
































































