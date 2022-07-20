// CODE HERE IS PUBLIC
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
            writeToLocalStorage(this.key, liveToDos);
            renderList(liveToDos, this.listElement, this, true);
        }
    }

    listToDos(hidden = true) {
        renderList(getToDos(this.key), this.listElement, this, hidden);
    }

    filterCompleted(completed) {
        readFromLocalStorage(completed);
        renderList(liveToDos, this.listElement, this, true);
        console.log(completed + "completed");
        let toDo = this.findToDo(completed);
        if (toDo) {
            filterTodoComplete(completed);
            renderList(getToDos(this.key), this.listElement, this, true);

        }

    }
    filterPending(pending) {
        readFromLocalStorage(pending);
        renderList(liveToDos, this.listElement, this, true);
        
        console.log(pending + "pending");
        let toDo = this.findToDo(pending);
        if (toDo) {
            filterTodoPending(pending);
            renderList(getToDos(this.key), this.listElement, this, false);

        }
        
    }

}

/*
CODE HERE IS PRIVATE - reads and write localStorage
*/

import { querySelection, writeToLocalStorage, readFromLocalStorage, bindTouch } from "./utilitis.js";

let liveToDos = null;

// Rendering code function
function renderList (list, element, toDos, hidden) {
    console.log(list); // Start by displaying the list
    element.innerHTML = '';

    list.forEach(todoItem => {
        const item = document.createElement('li');
        const completedTodoItem = document.querySelector("#completed");
        const pendingTodoItem = document.querySelector("#pending");
        const allItems = document.querySelector("#all");
        const formattedDate = new Date(todoItem.id).toLocaleDateString('en-US');

        let checkBox = null;
        let button = null;
        let selectComplete = null;
        let selectPending = null;
        let selectAll = null;


        if (hidden && todoItem.completed) {
            item.innerHTML = `${todoItem.content}</label><button>❌</buton>`;
            
        } else {
            item.innerHTML = `<label>${todoItem.content}</label><button>❌</buton>`;

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
        selectComplete = completedTodoItem;
        if (selectComplete) {
            selectComplete.addEventListener("click", function () {
                toDos.filterCompleted(todoItem.id)
            });
        }
        // attach event listener to the pending button
        selectPending = pendingTodoItem;
        if (selectPending) {
            selectPending.addEventListener("click", function () {
                toDos.filterPending(todoItem.id)
            });
        }
        // attach event listener to the all button
        // selectAll = allItems;
        // if (selectAll) {
        //     selectAll.addEventListener("click", function () {
        //         toDos.listToDos((hidden = true) => {
        //             renderList(getToDos(this.key), this.listElement, this, hidden);
        //         });
        //     });
        // }
        element.appendChild(item);

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
    let newList = getToDos().filter(item => item.completed === true);
    liveToDos = newList;
    return liveToDos;
}

function filterTodoPending() {
    let newList = getToDos().filter(item => item.completed === false);
    liveToDos = newList;
    return liveToDos;
}

