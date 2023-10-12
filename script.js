let interval;
let timeLeft = 25 * 60; // 25 minutes in seconds
const timerElement = document.getElementById("timer");

const updateDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
};

const resetTimer = () => {
    stopTimer();
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateDisplay();
};

// Initialize the timer display
updateDisplay();
