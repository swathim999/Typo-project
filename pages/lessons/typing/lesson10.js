import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Lesson1.module.css';

const lessonText = "Focus on progress, not perfection, as every step forward matters. Challenges are opportunities in disguise, pushing you to grow stronger and wiser. Stay positive, stay persistent, and success will follow.";

const Lesson10 = () => {  // Ensure the component name matches the export statement
  const [userInput, setUserInput] = useState("");
  const [errors, setErrors] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentKey, setCurrentKey] = useState('');
  const [accuracy, setAccuracy] = useState(100);
  const [countdown, setCountdown] = useState(60); // 1-minute countdown
  const router = useRouter();
  const keypressSoundRef = useRef(null);
  const timerRef = useRef(null);

  const keyboardLayout = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?']
  ];

  useEffect(() => {
    if (!isTyping) {
      setUserInput('');
      setCurrentKey('');
    }
  }, [isTyping]);

  useEffect(() => {
    keypressSoundRef.current = new Audio('/135872__crz1990__keyboard-typing-sounds-27-november-2011-121152-am.wav'); // Load the keypress sound

    const handleKeyDown = (e) => {
      if (!isTyping) return;
      setCurrentKey(e.key.toLowerCase());
      if (keypressSoundRef.current) {
        keypressSoundRef.current.currentTime = 0;
        keypressSoundRef.current.play();
      }
    };

    const handleKeyUp = () => {
      setCurrentKey('');
      if (keypressSoundRef.current) {
        keypressSoundRef.current.pause();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isTyping]);

  useEffect(() => {
    if (isTyping) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 0) {
            setIsTyping(false);
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTyping]);

  const calculateAccuracy = (inputText) => {
    let errors = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] !== lessonText[i]) {
        errors++;
      }
    }
    return ((lessonText.length - errors) / lessonText.length) * 100;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    if (value.length > 0 && value[value.length - 1] !== lessonText[value.length - 1]) {
      setErrors(errors + 1);
    }

    setAccuracy(calculateAccuracy(value));
  };

  const handleStart = () => {
    setIsTyping(true);
    setUserInput('');
    setCurrentKey('');
    setErrors(0);
    setAccuracy(100);
    setCountdown(60); // Reset countdown
  };

  const handleStop = () => {
    setIsTyping(false);
  };

  const handleNextLesson = () => {
    router.push('/lessons/typing/lesson1');
  };
  const handlePreviousLesson = () => { router.push('/lessons/typing/lesson9'); };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.typingContainer}>
        <h1>Typing Lesson 10</h1> {/* Ensure the title matches the lesson */}
        <p>{lessonText}</p>
        <textarea
          className={styles.typingArea}
          value={userInput}
          onChange={handleChange}
          placeholder="Start typing here..."
          rows={4}
          cols={50}
          disabled={!isTyping}
        ></textarea>
        <p>Countdown: {formatTime(countdown)}</p>
        <p className={styles.error}></p> {/* Show errors in red */}
        <p>Accuracy: {accuracy.toFixed(2)}%</p>
        <div className={styles.keyboardContainer}>
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.keyboardRow}>
              {row.map((key) => (
                <button
                  key={key}
                  className={`${styles.keyButton} ${currentKey === key ? styles.activeKey : ''}`}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleStart} disabled={isTyping} className={styles.startButton}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isTyping} className={styles.stopButton}>
            Stop
          </button>
          <button onClick={handlePreviousLesson} className={styles.previousButton}>
             Previous </button>
          <button onClick={handleNextLesson} className={styles.nextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson10; // Ensure this matches the component name
