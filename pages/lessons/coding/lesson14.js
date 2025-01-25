import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson14() {
  const [code, setCode] = useState(`public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0);
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        } finally {
            System.out.println("Execution complete.");
        }
    }

    public static int divide(int a, int b) {
        return a / b;
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
        <h1>Java Lesson 14: Exception Handling</h1>
        <p>
          Exception handling in Java is a powerful mechanism that handles runtime
          errors to maintain the normal flow of the application. Java uses{" "}
          <code>try</code>, <code>catch</code>, and <code>finally</code> blocks
          to handle exceptions.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Original Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Original Code</h3>
            <pre className={styles.code}>
              {`public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0);
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        } finally {
            System.out.println("Execution complete.");
        }
    }

    public static int divide(int a, int b) {
        return a / b;
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
        <Link href="/lessons/coding/lesson13">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson15">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
