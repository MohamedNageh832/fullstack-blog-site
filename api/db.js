const mysql = require("mysql");

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@1234",
  database: "Blog db",
});

db.connect((err) => {
  console.log("Database connected");
});
