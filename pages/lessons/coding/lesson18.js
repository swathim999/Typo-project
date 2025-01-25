import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson18() {
  const [code, setCode] = useState(`import java.util.Arrays;
import java.util.List;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Paul", "George", "Ringo");
        
        names.forEach((name) -> System.out.println(name));
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
        <h1>Java Lesson 18: Lambda Expressions</h1>
        <p>
          Lambda expressions in Java provide a clear and concise way to
          represent a method interface using an expression. They are used
          primarily to define the inline implementation of a functional
          interface.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Original Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Original Code</h3>
            <pre className={styles.code}>
              {`import java.util.Arrays;
import java.util.List;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Paul", "George", "Ringo");
        
        names.forEach((name) -> System.out.println(name));
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
        <Link href="/lessons/coding/lesson17">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson19">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
