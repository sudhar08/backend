const mysql = require('mysql2');
require('dotenv').config();

// MySQL Connection
const db = mysql.createConnection({
  host: "db.cry6uk8ew5bi.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Adminadmin",
  database: "jobs",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
  console.log("✅ MySQL connected successfully");
});

module.exports = db;
