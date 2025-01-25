import { useState } from "react";
import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson24() {
  const [code, setCode] = useState(`import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class JUnitTesting {
    @Test
    public void testAdd() {
        assertEquals(10, add(5, 5));
    }

    public int add(int a, int b) {
        return a + b;
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
        <h1>Java Lesson 24: JUnit Testing</h1>
        <p>
          JUnit is a unit testing framework for Java programming language. JUnit
          has been important in the development of test-driven development and
          is one of a family of unit testing frameworks collectively known as
          xUnit.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Reference Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Reference Code</h3>
            <pre className={styles.code}>
              {`import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class JUnitTesting {
    @Test
    public void testAdd() {
        assertEquals(10, add(5, 5));
    }

    public int add(int a, int b) {
        return a + b;
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
        {/* Link to the next lesson can go here */}
      </div>
    </div>
  );
}
