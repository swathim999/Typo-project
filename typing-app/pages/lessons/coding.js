import Link from "next/link";
import styles from "/styles/Lessons.module.css"; // Adjust the path as per your project structure

const Coding = () => {
  return (
    <div className={styles.container}>
      <h1>Coding Lessons</h1>
      <ul>
        <li>
          <Link href="/lessons/coding/lesson1">
            <button className={styles.lessonButton}>Lesson 1 : Introduction to Java</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson2">
            <button className={styles.lessonButton}>Lesson 2 : Variables and Data Types</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson3">
            <button className={styles.lessonButton}>Lesson 3 : Operators</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson4">
            <button className={styles.lessonButton}>Lesson 4 : Control Flow Statement</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson5">
            <button className={styles.lessonButton}>Lesson 5 : Methods </button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson6">
            <button className={styles.lessonButton}>Lesson 6 : Arrays</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson7">
            <button className={styles.lessonButton}>Lesson 7 : ObjectOriented programming</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson8">
            <button className={styles.lessonButton}>Lesson 8 : Inheritance</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson9">
            <button className={styles.lessonButton}>Lesson 9 : Polymorphism</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson10">
            <button className={styles.lessonButton}>Lesson 10 : Encapsulation</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson11">
            <button className={styles.lessonButton}>Lesson 11 : Interfaces</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson12">
            <button className={styles.lessonButton}>Lesson 12 : Abstract Classes</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson13">
            <button className={styles.lessonButton}>Lesson 13 : Collections Framework</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson14">
            <button className={styles.lessonButton}>Lesson 14 : Exception Handling</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson15">
            <button className={styles.lessonButton}>Lesson 15 : File I/O</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson16">
            <button className={styles.lessonButton}>Lesson 16 : Generics</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson17">
            <button className={styles.lessonButton}>Lesson 17 : Multithreading</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson18">
            <button className={styles.lessonButton}>Lesson 18 : Lambda Expressions</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson19">
            <button className={styles.lessonButton}>Lesson 19 : Stream API</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson20">
            <button className={styles.lessonButton}>Lesson 20 : Functional Interfaces</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson21">
            <button className={styles.lessonButton}>Lesson 21 : Annotations </button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson22">
            <button className={styles.lessonButton}>Lesson 22 : Reflection</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson23">
            <button className={styles.lessonButton}>Lesson 23 : JDBC (Java Database Connectivity)</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson24">
            <button className={styles.lessonButton}>Lesson 24 : JUnit Testing</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson25">
            <button className={styles.lessonButton}>Lesson 25 : Enums</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson26">
            <button className={styles.lessonButton}>Lesson 26 : Variable Arguments</button>
          </Link>
        </li>
        <li>
          <Link href="/lessons/coding/lesson27">
            <button className={styles.lessonButton}>Lesson 10 : Exception Handling</button>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Coding;
