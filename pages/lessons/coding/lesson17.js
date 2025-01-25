import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson17() {
  const [code, setCode] = useState(`class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Thread " + getId() + " - " + i);
        }
    }
}

public class Multithreading {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();

        thread1.start();
        thread2.start();
    }
}`);
  const [isCodeVisible, setIsCodeVisible] = useState(true);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lessonContent}>
        <h1>Java Lesson 17: Multithreading</h1>
        <p>
          Multithreading in Java is a process of executing multiple threads
          simultaneously. A thread is a lightweight sub-process, the smallest
          unit of processing. Java provides built-in support for multithreading
          by extending the <code>Thread</code> class or implementing the{" "}
          <code>Runnable</code> interface.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Original Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Original Code</h3>
            <pre className={styles.code}>
              {`class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Thread " + getId() + " - " + i);
        }
    }
}

public class Multithreading {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();

        thread1.start();
        thread2.start();
    }
}`}
            </pre>
          </div>

          {/* Right Side: Typing Area */}
          <div className={styles.typingAreaSection}>
            <h3>Your Code</h3>
            <textarea
              className={styles.codeArea}
              value={code}
              onChange={handleChange}
              rows={15}
              cols={50}
            />
            <div className={styles.toggleButtonContainer}>
              <button
                className={styles.toggleButton}
                onClick={toggleCodeVisibility}
              >
                {isCodeVisible ? "Hide Code" : "Show Code"}
              </button>
            </div>
          </div>
        </div>

        <p>After practicing, proceed to the next lesson.</p>
        <Link href="/lessons/coding/lesson16">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson18">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
