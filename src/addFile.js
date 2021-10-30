function addFile(req, res) {
    console.log(req.files)

    if (req.files) {
        // Get file and save it on the files directory
        var file = req.files.file
        var fileName = file.name

        file.mv("files/uploads/" + fileName)

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