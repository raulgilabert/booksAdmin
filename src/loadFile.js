const fs = require("fs")
const path = require("path")

function loadFile(req, res) {
    var url = req.url

    // url.split("/") returns an array ["", dir, filename]
    var file = url.split("/")[2]
    var dir = url.split("/")[1]

    // url.split("/") returns an array ["(dir)/(filename without extension)", extension]
    var extension = url.split(".")[1]

    var filePath = path.join(__dirname, "../", dir, file)
    
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
