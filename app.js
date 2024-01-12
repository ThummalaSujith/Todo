// Selectors



const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button")
const todoList=document.querySelector(".todo-list")
const filterOption=document.querySelector(".filter-todo")





//Event Listeners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)
//Functions

function addTodo(event){

event.preventDefault();


// Todo Div
const todoDiv=document.createElement("div");
todoDiv.classList.add('todo');

//create li
const newTodo=document.createElement("li");
newTodo.innerText=todoInput.value;
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


//append todo to todolist
todoList.appendChild(todoDiv);

//clear todo input value

todoInput.value="";
}



function deleteCheck(e){
    const item=e.target;
    //Delete Todo

    if(item.classList[0]==="delete"){
        const todo=item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })

     
    }

//check mark

if(item.classList[0]==="completed-btn"){
    const todo=item.parentElement;

    todo.classList.toggle("completed")
}
}

function filterTodo(e) {
    const todos = Array.from(todoList.children); // Convert to array
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;  
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

                case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }

    });
}


