import bcrypt from 'bcrypt';
import pool from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, password } = req.body;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const connection = await pool.getConnection();
      const [result] = await connection.execute(
        'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)',
        [firstname, lastname, email, hashedPassword]
      );
      connection.release();

      res.status(200).json({ message: 'Sign-up successful!' });
    } catch (error) {
      console.error('Sign-up error:', error);
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'Email already exists.' });
      } else {
        res.status(500).json({ message: 'Sign-up failed. Please try again.' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}