const pool = require('../../lib/db');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

      if (rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = rows[0];

      // Compare the provided password with the hashed password in the database
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}