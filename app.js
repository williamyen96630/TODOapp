const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const todoul = document.querySelector(".todo-list");

addBtn.addEventListener("click", () => {
  const todoli = document.createElement("li");
  todoli.className = "todo-item";
  const todoitem = document.createElement("span");
  todoitem.className = "item";
  const btn = document.createElement("button");
  btn.className = "closeBtn";

  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });

  if (taskInput.value !== "" && taskInput.value.trim()) {
    todoitem.textContent = taskInput.value;
    btn.textContent = "X";

    todoli.appendChild(todoitem);
    todoli.appendChild(btn);
    todoul.insertAdjacentElement("afterbegin", todoli);
    taskInput.value = "";
    taskInput.focus();
  }
});

taskInput.addEventListener("keypress", (enter) => {
  if (enter.key == "Enter") {
    const todoli = document.createElement("li");
    todoli.className = "todo-item";
    const todoitem = document.createElement("span");
    todoitem.className = "item";
    const btn = document.createElement("button");
    btn.className = "closeBtn";

    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });

    if (taskInput.value !== "" && taskInput.value.trim()) {
      todoitem.textContent = taskInput.value;
      btn.textContent = "X";

      todoli.appendChild(todoitem);
      todoli.appendChild(btn);
      todoul.insertAdjacentElement("afterbegin", todoli);
      taskInput.value = "";
      taskInput.focus();
    }
  }
});
