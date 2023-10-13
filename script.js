// Timer Variables & Functions
let interval;
let timeLeft = 25 * 60;
const timerElement = document.getElementById("timer");

const updateDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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

// To-Do Variables & Functions
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");

        const taskTextNode = document.createElement("span");
        taskTextNode.textContent = taskText;
        li.appendChild(taskTextNode);

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.addEventListener("click", () => {
            openDetailsModal(li);

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.addEventListener("click", () => {
            openDetailsModal(li);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li); // Changed from 'task' to 'li'
        });

        li.appendChild(deleteButton); // Changed from 'task' to 'li'
        li.appendChild(detailsButton);
        taskList.appendChild(li);
        taskInput.value = "";
        }
};

const openDetailsModal = (taskItem) => {
    const modal = document.getElementById("detailsModal");
    const closeButton = document.querySelector(".close");
    const saveButton = document.getElementById("saveButton");
    const detailsInput = document.getElementById("detailsInput");

    modal.style.display = "block";

    closeButton.onclick = () => {
        modal.style.display = "none";
    }

    saveButton.onclick = () => {
        const details = detailsInput.value.trim();
        const detailsSpan = document.createElement("span");
        detailsSpan.textContent = ` ${details}`;
        taskItem.appendChild(detailsSpan);

        modal.style.display = "none";
    }
};