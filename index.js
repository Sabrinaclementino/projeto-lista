const form = document.querySelector("#todo-list")
const taskTitleInput = document.querySelector("#task-title-input")

tasks = []

form.addEventListener("submit", (event) => {
  event.preventDefault();

const taskTitle = taskTitleInput.value

tasks.push({
  title: taskTitle,
  done: false,
})

localStorage.setItem("tasks", JSON.stringify(tasks))

taskTitleInput.value = ""
})

//Peguei elementos para add eventos a eles, pegar seus valores, criar obj e coloca-lo no array e no localStorage, limpar input após atualizacao da pagina