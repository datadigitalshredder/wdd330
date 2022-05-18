import { querySelection, writeToLocalStorage, readFromLocalStorage, bindTouch } from "./controls.js";

let liveToDos = null;

// Rendering code function
function renderList (list, element, toDos, hidden) {
    console.log(list); // Start by displaying the list
    element.innerHTML = '';

    list.forEach(todoItem => {
        const item = document.createElement('li');
        const formattedDate = new Date(todoItem.id).toLocaleDateString('en-US');

        let checkBox = null;
        let button = null;

        if(hidden && todoItem.completed) {
            item.innerHTML = `<label><input type="checkbox" checked><strike> ${todoItem.content}</strike></label>`
        } else {
            item.innerHTML = `<label><input type="checkbox"> ${todoItem.content}</label><button>❌</buuton>`
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

        element.appendChild(item);
    })
}
 
function getToDos(key) {
    if (liveToDos === null) {
        // read the list from the data store
        liveToDos = readFromLocalStorage(key) || [];
    }
    return liveToDos;
}

function addToDo(value, key) {
    // add the todo with Date using UTC millesecond string
    const newToDoItem = {
        id: new Date(),
        content: value,
        completed: false
    };
    liveToDos.push(newToDoItem);
    writeToLocalStorage(key, liveToDos);
}

function deleteTodo(key) { // line 71

}