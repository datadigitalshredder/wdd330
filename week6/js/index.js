import ToDoItems from './todo.js';
const listOfTodos = document.querySelector('#todoList');
const myToDos = new ToDoItems(listOfTodos, 'todo');
console.log(listOfTodos);
console.log(myToDos);
