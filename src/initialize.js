const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

function start() {
    // Creation of uploads directory if not exists
    const dir = 'files/uploads';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // Initialize database
    let db = new sqlite3.Database("data.db", (err) => {
        if (err) {
            return console.error(err.message);
        }

        console.log("Connected to database in data.db");
    });


    // Create tables if not exists
    let query = "CREATE TABLE IF NOT EXISTS data(Title TEXT, Author TEXT, " +
        "Category TEXT, Language TEXT, Format TEXT, File TEXT)";

    db.run(query, (err) => {
        if (err) {
            console.error(err.message);
        }

        console.log("Created table if not exists");
    })


    // Close database
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }

        console.log("Closed database in data.db");
    });
}


exports.init = start;