import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Lesson1.module.css';

const sampleText = "Now that you know how to type with all ten fingers, let's work on your speed and then move on to more advanced topics.";

export default function TypingPractice() {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentKey, setCurrentKey] = useState('');
  const [accuracy, setAccuracy] = useState(100);
  const [errorIndices, setErrorIndices] = useState([]);
  const [correctedIndices, setCorrectedIndices] = useState([]);
  const [countdown, setCountdown] = useState(60); // 5-minute countdown
  const router = useRouter();
  const keypressSoundRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isTyping) {
      setInput('');
      setCurrentKey('');
    }
  }, [isTyping]);

  useEffect(() => {
    keypressSoundRef.current = new Audio('/135872__crz1990__keyboard-typing-sounds-27-november-2011-121152-am.wav'); // Load the keypress sound

    const handleKeyDown = (e) => {
      if (!isTyping) return;
      if (keypressSoundRef.current) {
        keypressSoundRef.current.currentTime = 0;
        keypressSoundRef.current.play();
      }
    };

    const handleKeyUp = (e) => {
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
    const newErrorIndices = [];
    const newCorrectedIndices = [];
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] !== sampleText[i]) {
        errors++;
        newErrorIndices.push(i);
      } else if (errorIndices.includes(i) && inputText[i] === sampleText[i]) {
        newCorrectedIndices.push(i);
      }
    }
    setErrorIndices(newErrorIndices);
    setCorrectedIndices(newCorrectedIndices);
    return ((sampleText.length - errors) / sampleText.length) * 100;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const lastChar = value[value.length - 1] || '';
    setInput(value);
    setCurrentKey(lastChar);

    setText(value);

    setAccuracy(calculateAccuracy(value));
  };

  const handleStart = () => {
    setIsTyping(true);
    setText('');
    setInput('');
    setCurrentKey('');
    setAccuracy(100);
    setErrorIndices([]);
    setCorrectedIndices([]);
    setCountdown(60); // Reset countdown
  };

  const handleStop = () => {
    setIsTyping(false);
  };

  const handleNextLesson = () => {
    router.push('/lessons/typing/lesson2');
  };

  const keys = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?']
  ];

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.typingContainer}>
        <h1>Typing Lesson 1</h1>
        <div className={styles.sampleTextContainer}>
          {sampleText.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className={styles.word}>
              {word.split('').map((char, charIndex) => {
                const overallIndex = wordIndex * (word.length + 1) + charIndex;
                return (
                  <span
                    key={charIndex}
                    className={
                      errorIndices.includes(overallIndex)
                        ? styles.errorText
                        : correctedIndices.includes(overallIndex)
                        ? styles.correctedText
                        : ''
                    }
                  >
                    {char}
                  </span>
                );
              })}
              {' '}
            </span>
          ))}
        </div>
        <textarea
          className={styles.typingArea}
          placeholder="Start typing here..."
          value={input}
          onChange={handleChange}
          rows={4}
          cols={50}
          disabled={!isTyping}
        />
        <p>TimeLeft: {formatTime(countdown)}</p>
        <p>Accuracy: {accuracy.toFixed(2)}%</p>
        <div className={styles.keyboardContainer}>
          <div className={styles.keyboard}>
            {keys.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.keyboardRow}>
                {row.map((key, keyIndex) => (
                  <button
                    key={keyIndex}
                    className={`${styles.keyButton} ${key === currentKey ? styles.activeKey : ''}`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleStart} disabled={isTyping} className={styles.startButton}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isTyping} className={styles.stopButton}>
            Stop
          </button>
          <button onClick={handleNextLesson} className={styles.nextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
