// Timer Variables & Functions
let interval;
let timeLeft = 25 * 60;
const timerElement = document.getElementById("timer");


const updateDisplay = () => {
    // Your implementation for updating the display...
};
const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft === 0) {
            clearInterval(interval);
            // Call any additional logic you want to execute when the timer reaches 0
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
};

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 25 * 60;
    updateDisplay();
};
updateDisplay();

// To-Do Variables & Functions (no changes needed here)
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const addTask = () => {
    // ... (rest of the addTask function remains unchanged)
};

// Allow adding tasks with "Enter" key
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
