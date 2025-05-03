const mysql = require('mysql2');
require('dotenv').config();

// MySQL Connection
const db = mysql.createConnection({
  host: "database-1.cv6ioioaypol.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "adminadmin234",
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
