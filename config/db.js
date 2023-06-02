const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "password",
  database: process.env.DB || "SOME",
});

module.exports = pool;
