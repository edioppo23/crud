const register = require("./register.routes")
const activation = require("./activation.route")
const role = require("../routes/role.route")
const updateRole = require("../routes/role.route");

const routes = (app) => {
    app.use("/register", register)
    app.use("/activation", activation)
    app.use("/role", role)
    app.use("/update", updateRole)
}


module.exports = routes