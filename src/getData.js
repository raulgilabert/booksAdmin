const sqlite3 = require("sqlite3").verbose();

function getData(req, res) {
    // Initialize sqlite3
    let db = new sqlite3.Database("data.db", (err) => {
        if (err) {
            return console.error(err.message);
        }

        console.log("Connected to database in data.db");
    });

    // Request data
    db.serialize(() => {
        let query = "SELECT * FROM data";
        db.all(query, [], (err, rows) => {
            if (err) {
                console.error(err.message);
                res.sendStatus(400);
                return;
            }

            res.send(JSON.stringify(rows));
        })
    });

    // Close database
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }

        console.log("Closed database in data.db");
    });
}


function getFiltered(req, res) {
    console.log(req.params);
}


exports.getData = getData;
exports.getFiltered = getFiltered;
