import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Lessons.module.css";

export default function CodingLesson15() {
  const [code, setCode] = useState(`import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileIO {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            FileWriter writer = new FileWriter(file);
            writer.write("Hello, World!");
            writer.close();

            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            scanner.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
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
        <h1>Java Lesson 15: File I/O</h1>
        <p>
          Java provides the <code>java.io</code> package for reading and writing
          data to files. The <code>File</code> class is the central class of the
          package, used to read, write, and manipulate files and directories.
        </p>

        <div className={styles.codeContainer}>
          {/* Left Side: Original Code */}
          <div
            className={styles.codeSection}
            style={{ display: isCodeVisible ? "block" : "none" }}
          >
            <h3>Original Code</h3>
            <pre className={styles.code}>
              {`import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileIO {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            FileWriter writer = new FileWriter(file);
            writer.write("Hello, World!");
            writer.close();

            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                System.out.println(scanner.nextLine());
            }
            scanner.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
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
        <Link href="/lessons/coding/lesson14">
            <button className={styles.prevButton}>Previous Lesson</button>
          </Link>
        <Link href="/lessons/coding/lesson16">
          <button className={styles.nextButton}>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
}
