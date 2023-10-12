// Timer Variables & Functions (from previous code)
let interval;
let timeLeft = 25 * 60;
const timerElement = document.getElementById("timer");
const beep = document.getElementById("beep");

const updateDisplay = /* ... */;
const startTimer = /* ... */;
const stopTimer = /* ... */;
const resetTimer = /* ... */;
const playBeep = /* ... */;
updateDisplay();

// To-Do Variables & Functions
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Add delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
        taskList.removeChild(newTask);
    };

    // Append the delete button and the task to the list
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear input
    taskInput.value = "";
};

// Allow adding tasks with "Enter" key
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
