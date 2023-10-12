// Timer Variables & Functions
let interval;
let timeLeft = 25 * 60;
const timerElement = document.getElementById("timer");


const updateDisplay = () => {
    // Your implementation for updating the display...
};
const startTimer = () => {
    // Your implementation for starting the timer...
};
const stopTimer = () => {
    // Your implementation for stopping the timer...
};
const resetTimer = () => {
    // Your implementation for resetting the timer...
};
// No longer need 'playBeep' function here
// const playBeep = () => {
    // Your implementation for playing the beep...
//};
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
