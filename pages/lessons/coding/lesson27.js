import { useState } from "react";
import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson27() {
  const [code, setCode] = useState(`public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World!");
        System.out.println(sb);
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
        <h1>Java Lesson 27: StringBuilder and StringBuffer</h1>
        <p>
          StringBuilder and StringBuffer are used to create and manipulate mutable strings.
          StringBuilder is faster than StringBuffer, but StringBuffer is thread-safe.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Reference Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Reference Code</h3>
            <pre className={styles.code}>
              {`public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World!");
        System.out.println(sb);
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
