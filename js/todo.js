const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
    const createLi = document.createElement("li");
    const createSpan = document.createElement("span");
    createLi.appendChild(createSpan);
    createSpan.innerText = newToDo;
    toDoList.appendChild(createLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);