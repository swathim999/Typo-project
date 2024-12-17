const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const submitButton = document.getElementById('submitButton');
const endButton = document.getElementById('endButton');
const restartButton = document.getElementById('restartButton');
const toggleKeyboardButton = document.getElementById('toggleKeyboardButton');
const keyboard = document.getElementById('keyboard');
const resultMessage = document.getElementById('resultMessage');
const nextLessonSection = document.getElementById('nextLessonSection');
const retryButton = document.getElementById('retryButton');
const nextLessonButton = document.getElementById('nextLessonButton');

const keyboardButtons = Array.from(keyboard.getElementsByTagName('button'));

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "A picture is worth a thousand words."
];

let timer;
let timeLeft = 20;
let gameRunning = false;

// Get a random sentence
function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

// Start Game
function startGame() {
    textInput.disabled = false;
    textInput.focus();
    textDisplay.textContent = getRandomSentence();
    startButton.disabled = true;
    submitButton.disabled = false;
    endButton.disabled = false;
    restartButton.disabled = false;
    nextLessonSection.classList.add('hidden');

    timeLeft = 20;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    timer = setInterval(updateTimer, 1000);
}

// Update Timer
function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        endGame();
        showResult("Time's up! Try again.");
    }
}

// End Game
function endGame() {
    clearInterval(timer);
    textInput.disabled = true;
    gameRunning = false;
    startButton.disabled = false;
    submitButton.disabled = true;
    endButton.disabled = true;
    restartButton.disabled = true;
}

// Validate Sentence
function submitGame() {
    clearInterval(timer); // Stop the timer when submit is clicked

    if (textInput.value.trim() === textDisplay.textContent) {
        showResult("🎉 Congratulations! You typed correctly!");
    } else {
        showResult("❌ Incorrect. Try again.");
    }
}

// Show Result Message
function showResult(message) {
    resultMessage.textContent = message;
    nextLessonSection.classList.remove('hidden');
}

// Function to highlight the virtual keyboard button based on the key pressed
function highlightVirtualKey(key) {
    const button = keyboardButtons.find(button => button.textContent === key.toUpperCase());
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed'); // Remove highlight after a brief moment
        }, 200);
    }
}

// Listen for hardware keyboard events
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); // Get the key pressed
    highlightVirtualKey(key); // Highlight the corresponding button
});

// Toggle Keyboard Visibility
toggleKeyboardButton.addEventListener('click', () => {
    keyboard.classList.toggle('hidden');
    toggleKeyboardButton.textContent = keyboard.classList.contains('hidden') ? 'Show Keyboard' : 'Hide Keyboard';
});

// Button Event Listeners
startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);
submitButton.addEventListener('click', submitGame);
restartButton.addEventListener('click', startGame);
retryButton.addEventListener('click', startGame);
nextLessonButton.addEventListener('click', startGame);
