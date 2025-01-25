import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson2() {
  const [code, setCode] = useState(`public class Variables {
    public static void main(String[] args) {
        int myNumber = 5;
        double myDouble = 5.99;
        char myChar = 'D';
        boolean myBoolean = true;
        String myString = "Hello";

        System.out.println(myNumber);
        System.out.println(myDouble);
        System.out.println(myChar);
        System.out.println(myBoolean);
        System.out.println(myString);
    }
}`);
  const [isCodeVisible, setIsCodeVisible] = useState(true);  // State for code visibility

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lessonContent}>
        <h1>Java Lesson 2: Variables and Data Types</h1>
        <p>
          Variables in Java are containers that hold data during program execution.
          Each variable in Java has a specific type, which determines the size and layout of
          the variable's memory, and the range of values that can be stored within that memory.
        </p>

        <div className={styles.codeContainer}>
          {/* Left side: Original Code */}
          {isCodeVisible && (
            <div className={styles.codeSection}>
              <h3>Original Code</h3>
              <pre className={styles.code}>
                {`public class Variables {
    public static void main(String[] args) {
        int myNumber = 5;
        double myDouble = 5.99;
        char myChar = 'D';
        boolean myBoolean = true;
        String myString = "Hello";

        System.out.println(myNumber);
        System.out.println(myDouble);
        System.out.println(myChar);
        System.out.println(myBoolean);
        System.out.println(myString);
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
          <Link href="/lessons/coding/lesson1">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
          <Link href="/lessons/coding/lesson3">
            <button className={styles.nextButton}>Next Lesson</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
