// Modules
const express = require("express")
const cors = require("cors")

// Other files
const main = require("./mainPage")
const loadFile = require("./loadFile")

// Constants
const PORT = 8000


// App
const app = express()
app.use(cors())

// Router
app.get("/", main.main)
app.get("/file/*", loadFile.loadFile)
// Listener
app.listen(PORT)