import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson5() {
  const [code, setCode] = useState(`public class Methods {
    public static void main(String[] args) {
        greet("Alice");
        int sum = add(5, 10);
        System.out.println("Sum: " + sum);
    }

    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static int add(int a, int b) {
        return a + b;
    }
}`);
  const [isCodeVisible, setIsCodeVisible] = useState(true); // State for code visibility

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lessonContent}>
        <h1>Java Lesson 5: Methods</h1>
        <p>
          Methods in Java are blocks of code that perform a specific task and are defined within a class. Methods make code reusable and organized. They can take parameters and return a value.
        </p>

        <div className={styles.codeContainer}>
          {/* Left side: Original Code */}
          {isCodeVisible && (
            <div className={styles.codeSection}>
              <h3>Original Code</h3>
              <pre className={styles.code}>
                {`public class Methods {
    public static void main(String[] args) {
        greet("Alice");
        int sum = add(5, 10);
        System.out.println("Sum: " + sum);
    }

    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static int add(int a, int b) {
        return a + b;
    }
}`}
              </pre>
            </div>
          )}

          {/* Right side: Typing Area */}
          <div className={styles.typingAreaSection}>
            <h3>Your Code</h3>
            <textarea
              className={styles.codeArea}
              value={code}
              onChange={handleChange}
              rows={15}
              cols={50}
            />
            {/* Button to toggle visibility of the original code */}
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

        {/* Navigation buttons */}
        <div className={styles.navigationButtons}>
          <Link href="/lessons/coding/lesson4">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
          <Link href="/lessons/coding/lesson6">
            <button className={styles.nextButton}>Next Lesson</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
