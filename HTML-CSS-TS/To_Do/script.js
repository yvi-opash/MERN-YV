"use strict";
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
function show() {
    list.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement("li");
        const task = document.createElement("span");
        task.innerHTML = todos[i].text;
        const statusbu = document.createElement("button");
        statusbu.innerText = todos[i].status ? "✅" : "⏳";
        statusbu.style.backgroundColor = todos[i].status ? "green" : "blue";
        statusbu.style.marginLeft = "10px";
        // if(todos[i].status == false){
        //     statusbu.innerText = "⏳";
        //     statusbu.style.backgroundColor = "blue";
        //  }
        //  else{
        //     statusbu.innerText = "✅";
        //     statusbu.style.backgroundColor ="green";
        //     //statusbu.style.textDecoration = "line-through"
        //  }
        statusbu.onclick = () => {
            todos[i].status = !todos[i].status;
            // if(todos[i].status === true){
            //     todos[i].status = false;
            // }
            // else{
            //     todos[i].status = true;
            // }
            save();
        };
        const deletbu = document.createElement("button");
        deletbu.innerText = "Delete";
        deletbu.style.marginLeft = "10px";
        deletbu.onclick = () => {
            todos.splice(i, 1);
            save();
        };
        li.append(task, statusbu, deletbu);
        list.appendChild(li);
    }
}
function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
    show();
}
addBtn.onclick = () => {
    if (input.value === "") {
        input.placeholder = "Please Enter New Task";
        input.style.border = "2px solid red";
    }
    else {
        todos.push({ text: input.value, status: false });
        input.value = "";
        save();
    }
};
show();
