const fs = require("fs")
const path = require("path")

function loadFile(req, res) {
    // req.url.split("/") returns an array ["", "file", filename]
    var file = req.url.split("/")[2]

    // req.url.split("/") returns an array ["file/(filename without extension)", extension]
    var extension = req.url.split(".")[1]

    var filePath = path.join(__dirname, "../files/", file)
    
    if (fs.existsSync(filePath)) {
        // Send file if exists
        fs.readFile(filePath, function (err, data) {
            res.writeHead(200, {"content-type" : "text/" + extension})
            res.write(data)
            res.end()
        })
    }

    else {
        // Send 404 if file not found
        res.writeHead(404, {"content-type": "text/html"})
        res.write("Error 404, file not found")
        res.end()
        return null
    }
}

exports.loadFile = loadFile