require('dotenv').config(); // Load environment variables from .env
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'protyping',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the connection pool with promise support
module.exports = pool.promise();


