const express = require("express");
const router = express.Router();
const CreateRole = require("../actions/roles/create.role");
const deleteRole = require("../actions/roles/delete.role");
const RoleList = require("../actions/roles/getList.role");
const updateRole = require("../actions/roles/update.role");



// Create data ================================
router.post("/create",
    async (req, res) => {
        try {
            let data = await new CreateRole(req).exec();

            return res.send({
                code: 201,
                status: "Sukses",
                message: "Role created successfully",
                data
            });

        } catch (err) {
            return res.send({
                code: 400,
                status: "error",
                message: err.message

            });

        }
    });

// Menampilkan data ================
router.get('/',
    async (req, res) => {
        try {
            let data = await new RoleList(req).exec()
            return res.send({
                code: 200,
                status: " Success",
                message: "Role created successfully",
                data
            })
        } catch (err) {
            return res.send({
                code: 400,
                status: "Error masbro",
                message: err.message
            })
        }
    })


// Edit data ================================================
router.put("/:id",

    async (req, res) => {
        try {
            let { id } = req.params;
            let data = await new updateRole(id, req).update();

            return res.send({
                code: 200,
                status: "Sukses",
                message: "Role data updated successfully",
                data
            });
        } catch (err) {
            return res.send({
                code: 400,
                status: "error",
                message: err.message
            });
        }
    });

// Hapus data ======================================
router.delete("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let data = await new deleteRole(id).delete();

        return res.send({
            code: 200,
            status: "sukses",
            message: "Role data deleted succesfully",
            data
        });
    } catch (err) {
        return res.send({
            code: 400,
            status: "error",
            message: err.message
        })
    }
});

module.exports = router 