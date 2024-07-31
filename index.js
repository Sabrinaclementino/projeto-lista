const form = document.querySelector("#todo-list");
const taskTitleInput = document.querySelector("#task-title-input");

let tasks = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter, pelo menos, 3 caracteres!");
    return;
  }

  tasks.push({
    title: taskTitle,
    done: false,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTaskOnHTML(taskTitle);

  taskTitleInput.value = "";
});
