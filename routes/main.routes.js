const register = require("./register.routes")

const routes = (app) => {
    app.use("/register", register)
}

module.exports = routes