const express = require("express")
const app = express()
require("./db")

// const index_routes = require("./routes/index")
// const buah = require("./routes/buah.routes")
// const stok = require("./routes/stok.routes")

app.use(express.urlencoded({ extended: true }))

require("./routes/main.routes")(app)





app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)

})

