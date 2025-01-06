import { useState } from "react";
import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson26() {
  const [code, setCode] = useState(`public class VarargsExample {
    public static void main(String[] args) {
        printNumbers(1, 2, 3, 4, 5);
    }

    public static void printNumbers(int... numbers) {
        for (int number : numbers) {
            System.out.println(number);
        }
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
        <h1>Java Lesson 26: Varargs (Variable Arguments)</h1>
        <p>
          Varargs allows you to pass a variable number of arguments to a method.
          This is useful when you don’t know how many arguments will be passed.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Reference Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Reference Code</h3>
            <pre className={styles.code}>
              {`public class VarargsExample {
    public static void main(String[] args) {
        printNumbers(1, 2, 3, 4, 5);
    }

    public static void printNumbers(int... numbers) {
        for (int number : numbers) {
            System.out.println(number);
        }
    }
}`}
            </pre>
          </div>

          {/* Right Side: Typing Area */}
          <div className={styles.typingAreaSection}>
            <h3>Practice Area</h3>
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

        <p>Once you're done practicing, proceed to the next lesson.</p>
      </div>
    </div>
  );
}
