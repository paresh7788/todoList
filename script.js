const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() === "") return;

  const taskItem = createTaskItem(taskText);
  taskList.appendChild(taskItem);

  newTaskInput.value = "";
}

function createTaskItem(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  const editButton = li.querySelector(".edit");
  const deleteButton = li.querySelector(".delete");

  editButton.addEventListener("click", () => editTask(li));
  deleteButton.addEventListener("click", () => deleteTask(li));

  return li;
}

function editTask(taskItem) {
  const span = taskItem.querySelector("span");
  const newText = prompt("Edit the task:", span.textContent);
  if (newText !== null) {
    span.textContent = newText;
  }
}

function deleteTask(taskItem) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskList.removeChild(taskItem);
  }
}