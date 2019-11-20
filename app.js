const express = require('express')
const app = express()
require("./servers/db") // database connection

// Import routes files
const index_routes = require("./routes/index")
const darat_routes = require("./routes/darat.routes")
const amfibi_routes = require("./routes/amfibi.routes")
const buah_routes = require("./routes/buah.routes")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(` Selamat Datang di app.js `)
})

//Set routes imported
app.use("/index", index_routes)
app.use("/amfibi", amfibi_routes)
app.use("/darat", darat_routes)
app.use("/buah", buah_routes)

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
