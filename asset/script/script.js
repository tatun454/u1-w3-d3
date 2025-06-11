const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);
  input.value = "";
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
