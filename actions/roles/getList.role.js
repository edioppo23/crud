const Role = require("../../models/role.models");

class RoleList {
    constructor(req) {
        this.query = req.query;

    } async exec() {
        try {
            let { nama, permissions, page, limit, sorting } = this.query
            let params = {
                deleted_at: null
            }
            if (name) {
                params.name = { $regex: name, $options: "$i" }
            }
            if (permisssion) {

                params.permission = permission
            }

            let queryy = await Role.find(params)
            return query
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

module.exports = RoleList


