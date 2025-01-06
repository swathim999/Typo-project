import Link from "next/link";

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  title: {
    fontSize: "2.5rem",
    color: "#343a40",
    textAlign: "center",
    marginBottom: "20px",
    borderBottom: "2px solid #6c757d",
    paddingBottom: "10px"
  },
  lessonList: {
    listStyle: "none",
    
    padding: 0
    

  },
  lessonItem: {
    margin: "10px 0"
  },
  lessonLink: {
    display: "block",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    textAlign: "center",
    fontSize: "1.2rem",
    transition: "background-color 0.3s ease"
  },
  lessonLinkHover: {
    backgroundColor: "#0056b3"
  }
};

const Typing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Typing Lessons</h1>
      <ul style={styles.lessonList}>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson1"><span style={styles.lessonLink}>Lesson 1</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson2"><span style={styles.lessonLink}>Lesson 2</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson3"><span style={styles.lessonLink}>Lesson 3</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson4"><span style={styles.lessonLink}>Lesson 4</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson5"><span style={styles.lessonLink}>Lesson 5</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson6"><span style={styles.lessonLink}>Lesson 6</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson7"><span style={styles.lessonLink}>Lesson 7</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson8"><span style={styles.lessonLink}>Lesson 8</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson9"><span style={styles.lessonLink}>Lesson 9</span></Link>
        </li>
        <li style={styles.lessonItem}>
          <Link href="/lessons/typing/lesson10"><span style={styles.lessonLink}>Lesson 10</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default Typing;
