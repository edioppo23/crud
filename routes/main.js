const index = require("./index");
const dosens = require("./dosens")
const mahasiswas = require("./mahasiswas");
const matkuls = require("./matkuls")
const register = require("./register.routes");
const updateRole = require("../routes/role.route");


const routes = (app) => {
    app.use("/", index)
    app.use("/dosen", dosens)
    app.use("/mahasiswa", mahasiswas)
    app.use("/matkul", matkuls)
    app.use("/register", register)
    app.use("/update", updateRole)
}

module.exports = routes