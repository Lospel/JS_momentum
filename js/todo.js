const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    console.log(deleteLi.id);
}

function paintToDo(newToDo) {
    const createLi = document.createElement("li");
    createLi.id = newToDo.id;
    const createSpan = document.createElement("span");
    createSpan.innerText = newToDo.text;
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
    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDo = localStorage.getItem(TODOS_KEY);

if(saveToDo) {
    const parsedToDos = JSON.parse(saveToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}