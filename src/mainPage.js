// Modules
const path = require("path")

// Main function
function main(req, res) {
    res.sendFile(path.join(__dirname, 'html/main.html'))
}

exports.main = main