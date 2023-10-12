const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
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