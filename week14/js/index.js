import ToDoItems from './todo.js';
const listOfTodos = document.querySelector('#todoList');
const myToDos = new ToDoItems(listOfTodos, 'todo');

// Basic app functionality: dates and menu

// The header menu button
function toggleMenu (){
    document.getElementById('primaryNavigation').classList.toggle('open');
    document.getElementById('hamburgerButton').classList.toggle('open');

}
const btn = document.getElementById('hamburgerButton');
btn.onclick = toggleMenu;

// Date year in the footer
const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
const lastmod = document.querySelector('#lastmod');
