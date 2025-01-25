import { useState } from 'react';
import styles from '../styles/Login.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok) {
        alert('Sign-up successful! Please log in.');
        window.location.href = '/login';
      } else {
        alert(data.message || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Sign-up error:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Sign Up for ProTyping</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            First Name
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={styles.input}
              placeholder="First Name"
              required
            />
          </label>
          <label className={styles.label}>
            Last Name
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={styles.input}
              placeholder="Last Name"
              required
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Email"
              required
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Password"
              required
            />
          </label>
          <label className={styles.label}>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              placeholder="Confirm Password"
              required
            />
          </label>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p className={styles.text}>
          Already have an account? <a href="/login" className={styles.link}>Log in</a>
        </p>
      </div>
    </div>
  );
}
