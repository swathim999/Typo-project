import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson21() {
  const [code, setCode] = useState(`import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotation {
    String value();
}

@MyAnnotation(value = "Hello, World!")
public class Annotations {
    public static void main(String[] args) {
        Annotations obj = new Annotations();
        MyAnnotation annotation = obj.getClass().getAnnotation(MyAnnotation.class);
        System.out.println("Annotation value: " + annotation.value());
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
        <h1>Java Lesson 21: Annotations</h1>
        <p>
          Annotations in Java are used to provide metadata for your Java code.
          Annotations do not directly affect the execution of your code but can
          be used by compilers and tools to process the code.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Reference Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Reference Code</h3>
            <pre className={styles.code}>
              {`import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotation {
    String value();
}

@MyAnnotation(value = "Hello, World!")
public class Annotations {
    public static void main(String[] args) {
        Annotations obj = new Annotations();
        MyAnnotation annotation = obj.getClass().getAnnotation(MyAnnotation.class);
        System.out.println("Annotation value: " + annotation.value());
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
        <Link href="/lessons/coding/lesson20">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson22">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
