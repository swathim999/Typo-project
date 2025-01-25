const pool = require('../lib/db'); // Import the MySQL connection pool

(async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('Successfully connected to the MySQL database!');
    console.log('Test query result:', rows[0].result);
  } catch (error) {
    console.error('Failed to connect to the MySQL database:', error);
  } finally {
    process.exit();
  }
})();