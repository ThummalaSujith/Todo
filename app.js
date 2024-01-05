// Selectors

const { todo } = require("node:test");

const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button")
const todoList=document.querySelector(".todo-list")





//Event Listeners

todoButton.addEventListener('click',addTodo);

//Functions

function addTodo(event){

event.preventDefault();


// Todo Div
const todoDiv=document.createElement("div");
todoDiv.classList.add('todo');

//create li
const newTodo=document.createElement("li");
newTodo.innerText="hey";
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//Check Mark button

const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check"></i>';
completedButton.classList.add("completed-btn")
todoDiv.appendChild(completedButton)


// Delete button

const deleteButton=document.createElement("button");
deleteButton.innerHTML='<i class="fas fa-trash"></i>'
deleteButton.classList.add("delete");
todoDiv.appendChild(deleteButton);
}

