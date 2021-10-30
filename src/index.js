// Modules
const express = require("express")
const fileUpload = require("express-fileupload")
const fs = require('fs');

// Other files
const main = require("./mainPage")
const loadFile = require("./loadFile")
const addFile = require("./addFile")

// Constants
const PORT = 8000

// Creation of uploads directory if not exists

var dir = 'files/uploads'

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}


// App
const app = express()

app.use(fileUpload())

// Parsers
var rawParser = express.raw()

// Router
// GET
app.get("/", main.main)
app.get("/file/*", loadFile.loadFile)

//POST
app.post("/file", rawParser, addFile.addFile)

// Listener
app.listen(PORT)