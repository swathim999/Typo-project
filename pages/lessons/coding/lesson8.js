import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson8() {
  const [code, setCode] = useState(`class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.eat();
        dog.bark();
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
        <h1>Java Lesson 8: Inheritance</h1>
        <p>
          Inheritance is a mechanism in Java in which one class acquires the properties (fields) and behaviors (methods) of another class. The class that inherits the properties is known as the subclass or child class, and the class from which properties are inherited is called the superclass or parent class.
        </p>

        <div className={styles.codeContainer}>
          {/* Left side: Original Code */}
          {isCodeVisible && (
            <div className={styles.codeSection}>
              <h3>Original Code</h3>
              <pre className={styles.code}>
                {`class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.eat();
        dog.bark();
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
          <Link href="/lessons/coding/lesson7">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
          <Link href="/lessons/coding/lesson9">
            <button className={styles.nextButton}>Next Lesson</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
