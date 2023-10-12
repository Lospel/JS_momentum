const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
}

function paintToDo(newToDo) {
    const createLi = document.createElement("li");
    const createSpan = document.createElement("span");
    createSpan.innerText = newToDo;
    const createButton = document.createElement("button");
    createButton.innerText = "✖️";
    createButton.addEventListener("click", deleteToDo)
    createLi.appendChild(createSpan);
    createLi.appendChild(createButton);
    toDoList.appendChild(createLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item);
}

const saveToDo = localStorage.getItem(TODOS_KEY);

if(saveToDo) {
    const parsedToDos = JSON.parse(saveToDo);
    parsedToDos.forEach(sayHello);
}