const express = require('express')
const router = express.Router()
const login = require("../actions/login/login.action")

router.post("/", async (reg, res) => {
    try {
        let data = await new login(req).exec()

        return res.send({
            code: 200,
            status: "succes",
            message: "login succes full",
            data

        })
    } catch (err) {
        return res.send({
            code: 400,
            status: "Error ,,,,,",
            message: err.message
        })
    }
})

module.exports = router