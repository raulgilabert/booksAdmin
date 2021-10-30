const fs = require("fs")
const path = require("path")

function loadFile(req, res) {
    let url = req.url

    // url.split("/") returns an array ["", dir, filename]
    let file = url.split("/")[2]
    let dir = url.split("/")[1]

    // url.split("/") returns an array ["(dir)/(filename without extension)", extension]
    let extension = url.split(".")[1]

    let filePath = path.join(__dirname, "../", dir, file)
    
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
    }
}

exports.loadFile = loadFile
