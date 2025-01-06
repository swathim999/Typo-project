import { useState } from 'react';
import styles from '../styles/Login.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (response.ok) {
      alert('Sign-up successful! Please log in.');
      window.location.href = '/login';
    } else {
      alert(data.message || 'Sign-up failed. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Sign Up for ProTyping</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Email"
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
            />
          </label>
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
        <p className={styles.text}>
          Already have an account? <a href="/login" className={styles.link}>Log in</a>
        </p>
      </div>
    </div>
  );
}
