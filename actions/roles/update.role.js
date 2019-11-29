const Role = require("../../models/role.models");


class UpdateRole {
    constructor(id, req) {
        (this.id = id),
            (this.name = req.body.name),
            (this.menu = req.body.menu);

    } async update() {
        try {
            let data = {
                name: this.name,
                menu: this.menu,
                updated_at: Date.now()
            };

            let query = await Role.findOneAndUpdate(
                {
                    _id: this.id
                },
                data,
                {
                    new: true
                }
            ).exec();
            return query;
        } catch (err) {
            throw err;
        }

    }
}

module.exports = UpdateRole;

