import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson22() {
  const [code, setCode] = useState(`import java.lang.reflect.Method;

public class Reflection {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("java.lang.String");
            Method[] methods = cls.getDeclaredMethods();

            for (Method method : methods) {
                System.out.println(method.getName());
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
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
        <h1>Java Lesson 22: Reflection</h1>
        <p>
          Reflection in Java is a feature that allows a program to inspect and
          manipulate the internal properties of classes, methods, and fields at
          runtime. Reflection is used for tasks such as debugging, testing, and
          dynamic class loading.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Reference Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Reference Code</h3>
            <pre className={styles.code}>
              {`import java.lang.reflect.Method;

public class Reflection {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("java.lang.String");
            Method[] methods = cls.getDeclaredMethods();

            for (Method method : methods) {
                System.out.println(method.getName());
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
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
        <Link href="/lessons/coding/lesson21">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson23">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
