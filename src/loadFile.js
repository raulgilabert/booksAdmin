const fs = require("fs");
const path = require("path");

function loadFile(req, res) {
    // Get the url
    let url = req.url;

    // Array of the path divided by the directories
    let urlSplit = url.split("/");

    // Path of the files directory
    let filePath = path.join(__dirname, "../files/");

    // Add to the path the file
    for (let i = 2; i < urlSplit.length; ++i) {
        filePath = path.join(filePath, urlSplit[i]);
    }

    // Print requested files path
    console.log("Requested file: " + filePath);

    // Get the extension of the file to return the "content-type"
    let extension = filePath.split(".")[1];

    if (fs.existsSync(filePath)) {
        // Send file if exists
        fs.readFile(filePath, function (err, data) {
            if (extension === "js") {
                res.writeHead(200, {"content-type": "application/javascript"});
            }
            else {
                res.writeHead(200, {"content-type": "text/" + extension});
            }
            res.write(data);
            res.end();
        })
    }

    else {
        // Send 404 if file not found
        res.writeHead(404, {"content-type": "text/html"});
        res.write("Error 404, file not found");
        res.end();
    }
}

exports.loadFile = loadFile;
