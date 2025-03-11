const mysql = require('mysql2');
require('dotenv').config();

// MySQL Connection
const db = mysql.createConnection({
  host: "sudharsanan.mysql.database.azure.com",
  user: "sudhar08",
  password: "androidandroid023@",
  database: "jobdb",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
  console.log("✅ MySQL connected successfully");
});

module.exports = db;
