const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // 1. Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something to add a task!");
    } else {
        // 2. Create a new list item (<li>)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // 3. Create the delete button (<span>)
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for the 'x' close symbol
        li.appendChild(span);
    }
    
    // 4. Clear the input box and save the new data
    inputBox.value = "";
    saveData();
}

// Event listener for checking/deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class to mark as complete/incomplete
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent list item (<li>) when the 'x' is clicked
        e.target.parentElement.remove();
        saveData();
    }
}, false); // 'false' is the default for event bubbling

// Function to save the task list to the browser's local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the saved task list when the app loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load the tasks when the script starts
showTask();