// Modules
const express = require("express");
const fileUpload = require("express-fileupload");

// Other files
const main = require("./mainPage");
const loadFile = require("./loadFile");
const addFile = require("./addFile");
const getData = require("./getData");
const initialize = require("./initialize")
// Constants
const PORT = 8000;

// Initialize
initialize.init();

// App
const app = express();

// Use temporally files
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

// Parsers
const rawParser = express.raw();

// Router
// GET
app.get("/", main.main);
app.get("/file/*", loadFile.loadFile);

//POST
app.post("/file", rawParser, addFile.addFile);



// API
app.get("/api/files", getData.getData);
app.get("/api/file", getData.getFiltered);


// Listener
app.listen(PORT);