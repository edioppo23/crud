const express = require('express')
const router = express.Router()
const { create, getAll } = require("../actions/books")
const { isString } = require("lodash")

router.post("/create", (req, res) => {
    let data = create(req)
    if (isString(data) == true) {
        return res.status(400).json({
            status: "error",
            message: data
        })
    }

    return res.status(200).json({
        status: "sukses",
        data,
        message: "Book berhasil dibuat"
    })
})

router.get("/getAll", async (req, res) => {
    let data = await getAll()

    return res.send({
        status: "sukses",
        data,
        message: "Get all book data "
    })
})

module.exports = router