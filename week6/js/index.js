import ToDoItems from './todo.js';
const listOfTodos = document.querySelector('#todoList');
const myToDos = new ToDoItems(listOfTodos, 'todo');
console.log(listOfTodos);
console.log(myToDos);

// document.querySelector('.filters').addEventListener('click', function(e) {
//     if (e.target.localName === 'span'){
//         let selectedOption = e.target.innerText;

//         if(selectedOption === 'All') {
//             renderList(listOfTodos); // render everything
 
//         } else if(selectedOption === 'Pending'){
//             let activeToDos = listOfTodos.filter(todo => todo.completed === false);
//             renderList(activeToDos); // only render the todos which have not been completed
//         }else if(selectedOption === 'Completed'){
//             let completedToDos = listOfTodos.filter(todo => todo.completed === true);
//             renderList(completedToDos); // only render the todos which have not been completed
//         }
        
//     }
// });