const register = require("./register.routes")
const activation = require("./activation.route")
const user = require('./user.route')
const role = require("../routes/role.route")
const login = require('./login.route')
const reset = require('./reset.route')
const verifyJWT = require("../middleware/verify_jwt.middleware")

const routes = (app) => {
    app.use("/register", register)
    app.use("/activation", activation)
    app.use("/user", user)
    app.use("/role", role)
    app.use("/login", login)
    app.use("/reset", reset)

}


module.exports = routes