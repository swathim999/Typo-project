import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson11() {
  const [code, setCode] = useState(`interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Interfaces {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
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
        <h1>Java Lesson 11: Interfaces</h1>
        <p>
          An interface in Java is a reference type, similar to a class, that can
          contain only constants, method signatures, default methods, static
          methods, and nested types. Interfaces cannot contain instance fields.
          The methods in interfaces are abstract by default.
        </p>

        <div className={styles.codeContainer}>
          {/* Left side: Original Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Original Code</h3>
            <pre className={styles.code}>
              {`interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Interfaces {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}`}
            </pre>
          </div>

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
        <Link href="/lessons/coding/lesson10">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson12">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
