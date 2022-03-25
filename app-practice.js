const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const todoul = document.querySelector(".todo-list");

taskInput.addEventListener;

addBtn.addEventListener("click", () => {
  const todoli = document.createElement("li");
  todoli.className = "todo-item";
  const todoitem = document.createElement("span");
  todoitem.className = "item";
  const btn = document.createElement("button");
  btn.className = "closeBtn";

  if (taskInput.value !== "" && taskInput.value.trim()) {
    todoitem.textContent = taskInput.value;
    btn.textContent = "X";

    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });

    todoli.appendChild(todoitem);
    todoli.appendChild(btn);
    todoul.appendChild(todoli);

    taskInput.value = "";
    taskInput.focus();
  } else {
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

    if (taskInput.value !== "" && taskInput.value.trim()) {
      todoitem.textContent = taskInput.value;
      btn.textContent = "X";

      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });

      todoli.appendChild(todoitem);
      todoli.appendChild(btn);
      todoul.appendChild(todoli);

      taskInput.value = "";
    }
  }
});

//老師範例1
function createTodoItem(text) {
  const todo = document.createElement("li");
  todo.className = "todo-item";

  const span = document.createElement("span");
  span.className = "item";
  span.textContent = text;

  const btn = document.createElement("button");
  btn.className = "closeBtn";
  btn.textContent = "X";
  btn.addEventListener("click", function (e) {
    this.parentElement.remove();
  });

  todo.appendChild(span);
  todo.appendChild(btn);

  return todo;
}

function addItemInContainer(container, input) {
  if (input.value.trim() !== "") {
    const todo = createTodoItem(input.value);
    container.insertAdjacentElement("afterbegin", todo);
  }

  input.value = "";
  input.focus();
}

function addTodo() {
  const container = document.querySelector(".todo-list");
  const input = document.querySelector("#taskInput");
  addItemInContainer(container, input);
}

document.querySelector("#addBtn").addEventListener("click", addTodo);

document.querySelector("#taskInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// //調整X監聽器的方式
// //事件委任event delegation
// function createTodoItem(text) {
//   const todo = document.createElement("li")
//   todo.className = "todo-item"

//   const span = document.createElement("span")
//   span.className = "item"
//   span.textContent = text

//   const btn = document.createElement("button")
//   btn.className = "closeBtn"
//   btn.textContent = "X"

//   todo.appendChild(span)
//   todo.appendChild(btn)

//   return todo
// }

// function addItemInContainer(container, input) {
//   if (input.value.trim() !== "") {
//     const todo = createTodoItem(input.value)
//     container.insertAdjacentElement("afterbegin", todo)
//   }

//   input.value = ""
//   input.focus()
// }

// function addTodo() {
//   const container = document.querySelector(".todo-list")
//   const input = document.querySelector("#taskInput")
//   addItemInContainer(container, input)
// }

// document.querySelector("#addBtn").addEventListener("click", addTodo)

// document.querySelector("#taskInput").addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     addTodo()
//   }
// })

// // 事件委任 event delegation
// document.querySelector(".todo-list").addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     e.target.parentElement.remove()
//   }
// })
