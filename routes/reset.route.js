const express = require('express')
const router = express.Router()
const ForgotPassword = require('../actions/reset_passwords/forgot_password_action')
const ShowPassword = require('../actions/reset_passwords/show_password_action')
const Reset = require('../actions/reset_passwords/reset_password_action')

router.post("/", async (req, res) => {
    try {
        await new ForgotPassword(req.body.email).exec()

        return res.send({
            status: "Success",
            message: "Reset password succes"
        })
    } catch (err) {
        return res.status(400).json({
            status: " Error",
            message: err.message

        })
    }
})

router.get("/:token", async (req, res) => {
    try {
        let data = await new ShowPassword({
            token: req.params.token
        }).exec()

        return res.send({
            status: " Success",
            data
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }

})

router.post("/:token", async (req, res) => {
    try {
        let data = await new Reset(req.body.password, req.params.token).exec()

        return res.send({
            status: " Success",
            data_up: {
                user: data,
                pwd: data.newpwd
            }
        })
    } catch (err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

module.exports = router 
