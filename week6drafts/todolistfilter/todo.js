document.getElementById('myDropdown').addEventListener('click', function(event) {
    if (e.target.localName === 'span'){
        let selectedOption = e.target.innerText;

        if(selectedOption === 'All Tasks')
            renderToDos(toDoList); // render everything
 
        else if(selectedOption === 'Active'){
            let activeToDos = toDoList.filter(todo => todo.completed === false);
            renderToDos(activeToDos); // only render the todos which have not been completed
        }

        else if(selectedOption === 'Completed'){
            let completedToDos = toDoList.filter(todo => todo.completed === true);
            renderToDos(completedToDos); // only render the todos which have not been completed
        }
    }
});