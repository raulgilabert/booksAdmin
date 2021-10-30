const path = require("path")

function addFile(req, res) {
    console.log(req.files)

    if (req.files) {
        // Get file and save it on the files directory
        let file = req.files.file
        let fileName = file.name

        file.mv(path.join(__dirname, "../files/uploads/", fileName))

        res.status(200)
        res.send("File uploaded")
    }
    else {
        res.status(400)
        res.send("No file detected")
    }

    res.end()
}

exports.addFile = addFile