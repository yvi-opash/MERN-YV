// const input = document.getElementById("todoInput") as HTMLInputElement;
// const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
// const list = document.getElementById("todoList") as HTMLUListElement;

// addBtn.addEventListener("click", () => {

//   if (input.value !== "") {

//     // create li
//     const li = document.createElement("li");

//     // task text
//     const task = document.createElement("span");
//     task.innerText = input.value;

//     // status button
//     const statusBtn = document.createElement("button");
//     statusBtn.innerText = "👎";
//     statusBtn.style.marginLeft = "10px";
//     statusBtn.style.background = "red";
//     statusBtn.style.color = "white";

//     statusBtn.addEventListener("click", () => {
//       statusBtn.innerText = "👍";
//       statusBtn.style.background = "green";
//       task.style.textDecoration = "line-through";
//     });

//     // delete button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.style.marginLeft = "10px";

//     deleteBtn.addEventListener("click", () => {
//       alert("Your task has been deleted");
//       li.remove();
//     });

//     // append elements
//     li.append(task, statusBtn, deleteBtn);
//     list.appendChild(li);

//     // clear input
//     input.value = "";

//   } else {
//     input.placeholder = "Please Enter New Task";
//     input.style.border = "2px solid red";
//   }
// });



const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

type Todo = {
  text: string;
  completed: boolean;
};

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

function showTodos() {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    
    const li = document.createElement("li");

    const task = document.createElement("span");
    task.innerText = todos[i].text;

    if (todos[i].completed) {
      task.style.textDecoration = "line-through";
    }

    const statusBtn = document.createElement("button");
    statusBtn.innerText = todos[i].completed ? "⏳" : "✅";
    statusBtn.style.marginLeft = "10px";
    statusBtn.style.background = todos[i].completed ? "green" : "blue";
    statusBtn.style.color = "white";

    statusBtn.onclick = () => {
      todos[i].completed = !todos[i].completed;
      saveTodos();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = () => {
      todos.splice(i, 1);
      saveTodos();
    };

    li.append(task, statusBtn, deleteBtn);
    list.appendChild(li);
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
}

addBtn.onclick = () => {
  if (input.value === "") {
    input.placeholder = "Please Enter New Task";
    input.style.border = "2px solid red";
    return;
  }

  todos.push({ text: input.value, completed: false });
  input.value = "";
  saveTodos();
};

showTodos();