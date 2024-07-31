const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const span = document.createElement("span");
  span.textContent = taskTitle;

  const button = document.createElement("button");
  button.textContent = "Remover";

  input.checked = done;

  if (done) {
    span.style.textDecoration = "line-through";
  }

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
}

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
