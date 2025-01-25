import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson3() {
  const [code, setCode] = useState(`public class Operators {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
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
        <h1>Java Lesson 3: Operators</h1>
        <p>
          Operators in Java are special symbols that perform specific operations on one, two, or three operands and then return a result. Operators are used to perform operations such as addition, subtraction, multiplication, and division.
        </p>

        <div className={styles.codeContainer}>
          {/* Left side: Original Code */}
          {isCodeVisible && (
            <div className={styles.codeSection}>
              <h3>Original Code</h3>
              <pre className={styles.code}>
                {`public class Operators {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
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
          <Link href="/lessons/coding/lesson2">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
          <Link href="/lessons/coding/lesson4">
            <button className={styles.nextButton}>Next Lesson</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
