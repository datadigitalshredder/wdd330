// CODE HERE ONWARDS IS PUBLIC
export default class ToDoItems {
    constructor(listElement, key) {
        this.listElement = listElement; // Store the listelement inside the class
        this.key = key;
        bindTouch("#addToDo", this.newToDo.bind(this));
        this.listToDos();
    }

    newToDo() {
        const newTask = document.getElementById("todoInput");
        addToDo(newTask.value, this.key);
        newTask.value = "";
        this.listToDos();
    }

    findToDo(id) {
        let toDo = liveToDos.find( element => {
            return element.id === id;
        });
        return toDo;
    }

    completeToDoItem(id) {
        console.log(id + 'checked');
        let toDo = this.findToDo(id);

        if(toDo){
            toDo.completed = !toDo.completed;
            writeToLocalStorage(this.key, liveToDos);
            renderList(liveToDos, this.listElement, this, true);
        }
    }

    removeToDoItem(id) {
        console.log(id + 'removed');
        let toDo = this.findToDo(id);

        if(toDo){
            deleteTodo(id);
            renderList(liveToDos, this.listElement, this, true);
        }
    }

    listToDos(hidden = true) {
        renderList(getToDos(this.key), this.listElement, this, hidden);
    }

    filterCompleted(completed) {
        console.log(completed + "completed");
        let toDo = this.findToDo(completed);
        if (toDo) {
            filterTodoComplete(completed);
            renderList(liveToDos, this.listElement, this, true)
        }
    }
    filterPending(pending) {
        console.log(pending + "pending");
        let toDo = this.findToDo(pending);
        if (toDo) {
            filterTodoPending(pending);
            renderList(liveToDos, this.listElement, this, true)
        }
    }

    
}

/*
CODE HERE IS PRIVATE - reads and write localStorage
*/

import { querySelection, writeToLocalStorage, readFromLocalStorage, bindTouch } from "./utilitis.js";

let liveToDos = null;
// const filterOptions = document.querySelector('.filter-todos')

// Rendering code function
function renderList (list, element, toDos, hidden) {
    console.log(list); // Start by displaying the list
    element.innerHTML = '';
    // elementDate.innerHTML = '';

    list.forEach(todoItem => {
        const item = document.createElement('li');
        const completedTodoItem = document.querySelector("#completed");
        const pendingTodoItem = document.querySelector("#pending");
        const formattedDate = new Date(todoItem.id).toLocaleDateString('en-US');

        let checkBox = null;
        let button = null;
        let select = null;

        if (hidden && todoItem.completed) {
            item.innerHTML = `<label><input type="checkbox" checked><strike>${todoItem.content}</strike></label><button>❌</buton>`;
            // formattedDate.innerHTML = `<label><input type="date" checked><strike>${todoItem.content}</strike></label>`;
            
        } else {
            item.innerHTML = `<label><input type="checkbox"> ${todoItem.content}</label><button>❌</buton>`;
            // elementDate.innerHTML = `${formattedDate}`;

        }

        // attach event listener to the checkbox
        checkBox = item.childNodes[0].childNodes[0];

        if(checkBox) {
            checkBox.addEventListener("change", function() {
                toDos.completeToDoItem(todoItem.id);
            });
        }

        // attach event listener to the button
        button = item.childNodes[1];
        if(button) {
            button.addEventListener("click", function() {
                toDos.removeToDoItem(todoItem.id);
            });
        }
        // attach event listener to the Complete button
        select = completedTodoItem;
        if (select) {
            select.addEventListener("click", function () {
                toDos.filterCompleted(todoItem.id)
            })
        }
        // attach event listener to the pending button
        select = pendingTodoItem;
        if (select) {
            select.addEventListener("click", function () {
                toDos.filterPending(todoItem.id)
            })
        }
        element.appendChild(item);
        // element.appendChild(completedTodoItem);
        // element.appendChild(pendingTodoItem);

    });
}
 
function getToDos(key) {
    if (liveToDos === null) {
        // read the list from the data store
        liveToDos = readFromLocalStorage(key) || [];
    }
    return liveToDos;
}

function addToDo(value, key) {
    // add the todo with Date using UTC millisecond string as the id
    const newToDoItem = {
        id: new Date(),
        content: value,
        completed: false
    };
    liveToDos.push(newToDoItem);
    writeToLocalStorage(key, liveToDos);
}

function deleteTodo(key) { 
    let newList = liveToDos.filter(item => item.id != key);
    liveToDos = newList;
    writeToLocalStorage(key, liveToDos);
}

function filterTodoComplete() {
    let newList = liveToDos.filter(item => item.completed == true);
    liveToDos = newList;
    writeToLocalStorage(liveToDos);
}

function filterTodoPending() {
    let newList = liveToDos.filter(item => item.completed == false);
    liveToDos = newList;
    writeToLocalStorage(liveToDos);
}

