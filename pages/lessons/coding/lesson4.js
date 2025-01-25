import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson4() {
  const [code, setCode] = useState(`public class ControlFlow {
    public static void main(String[] args) {
        int number = 10;

        // if-else statement
        if (number > 0) {
            System.out.println("Positive number");
        } else {
            System.out.println("Non-positive number");
        }

        // switch statement
        switch (number) {
            case 10:
                System.out.println("Number is 10");
                break;
            case 20:
                System.out.println("Number is 20");
                break;
            default:
                System.out.println("Number is not 10 or 20");
        }

        // for loop
        for (int i = 0; i < 5; i++) {
            System.out.println("i: " + i);
        }

        // while loop
        int j = 0;
        while (j < 5) {
            System.out.println("j: " + j);
            j++;
        }

        // do-while loop
        int k = 0;
        do {
            System.out.println("k: " + k);
            k++;
        } while (k < 5);
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
        <h1>Java Lesson 4: Control Flow Statements</h1>
        <p>
          Control flow statements in Java allow you to control the flow of execution of your program based on certain conditions. Examples include if-else statements, switch statements, and loops (for, while, do-while).
        </p>

        <div className={styles.codeContainer}>
          {/* Left side: Original Code */}
          {isCodeVisible && (
            <div className={styles.codeSection}>
              <h3>Original Code</h3>
              <pre className={styles.code}>
                {`public class ControlFlow {
    public static void main(String[] args) {
        int number = 10;

        // if-else statement
        if (number > 0) {
            System.out.println("Positive number");
        } else {
            System.out.println("Non-positive number");
        }

        // switch statement
        switch (number) {
            case 10:
                System.out.println("Number is 10");
                break;
            case 20:
                System.out.println("Number is 20");
                break;
            default:
                System.out.println("Number is not 10 or 20");
        }

        // for loop
        for (int i = 0; i < 5; i++) {
            System.out.println("i: " + i);
        }

        // while loop
        int j = 0;
        while (j < 5) {
            System.out.println("j: " + j);
            j++;
        }

        // do-while loop
        int k = 0;
        do {
            System.out.println("k: " + k);
            k++;
        } while (k < 5);
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
          <Link href="/lessons/coding/lesson3">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
          <Link href="/lessons/coding/lesson5">
            <button className={styles.nextButton}>Next Lesson</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
