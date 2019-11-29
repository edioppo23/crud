const express = require("express");
const router = express.Router();

const Activation = require("../actions/login/activation.action")

router.get("/:token", async (req, res) => {
    try {
        let data = await new Activation(req.params.token).exec();

        return res.send({
            code: 200,
            status: " Sukses",
            message: "Activation is done",
            data: data
        });
    } catch (err) {
        return res.send({
            code: 400,
            status: " Error activation fail",
            message: err.message

        });
    }
});


module.exports = router







