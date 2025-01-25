import styles from '../styles/Home.module.css';

export default function GetStarted() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.leftCorner}>
          <a href="/" className={styles.navLink}>ProTyping</a>
        </div>
        <div className={styles.rightCorner}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/get-started" className={styles.navLink}>Get Started</a>
          <a href="/stats" className={styles.navLink}>Stats</a>
          <a href="/login" className={styles.navLink}>Login</a>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Get Started with ProTyping</h1>
        <p className={styles.description}>Choose a lesson to begin:</p>
        <div className={styles.lessonLinks}>
          <a href="/lessons/typing" className={styles.navLink}>Typing Lessons</a>
          <a href="/lessons/coding" className={styles.navLink}>Coding Lessons</a>
        </div>
      </main>
    </div>
  );
}