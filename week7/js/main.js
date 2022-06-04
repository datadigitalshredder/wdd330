// JSON Receiving Data Example
// This assigns each of the buttons in the HTML file to a variable, so we can refer to them later in the file.
const textButton = document.getElementById('number'),
apiButton = document.getElementById('chuck'),
outputDiv = document.getElementById('output');

// assign some URLs to variables:
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// assign an event handler to each button:
// This returns a promise that resolves to a string. We can then place that string inside the <div> with an id of 'output' by assigning it its innerText property.
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

// And now for the Chuck Norris Fact button:
// This is almost identical to the Number example, except the response returns JSON, so we use the 
// json() method to return a promise that resolves as a JavaScript object. This object has a value 
// property that contains the Chuck Norris fact, so we insert it into the <div> with an id of 'output'
// using innerText again.
apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);

// JSON Sending Data Example
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )

    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}
// This code creates an event listener that first of all prevents the default behavior of the form, so it doesn't get submitted when the Add Task button is clicked. Next it creates a task object with a title property that is taken from what was entered in the form. It also has a completed property that has a default value of false. This object is then transformed into a JSON string using the JSON.stringify method and assigned to the variable data.
// After this, we build the Headers and Request objects. Because we are sending JSON, we need to add headers of 'Accept': 'application/json' and 'Content-Type': 'application/json'. Because we are sending data, we need to ensure that the method property of the request object is POST so that a POST request is used to send the data. The most important property of the request object is body – this is where the data we want to send is placed. We use the data variable here, so that JSON is sent to the server.
// Then we use the fetch() method to send the request and deal with the response. This creates a promise that resolves to a JSON object, so we use the json() method to create another promise that resolves to a JavaScript object. This object has a single property of id to mimic successfully saving the task to a database (as this would result in it being assigned an ID by the database).
// We can use this to log a message to the console that refers to the id property that was returned.
// If you open up the 'todo.html' file, add a task in the form and then submit it, you should see a message in the console similar to the one below.

// The alternative formData method, reduces the amount of code
const form1 = document.forms['todo'];

form1.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const task = new FormData(form1);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        mode: 'cors',
        header: headers,
        body: JSON.stringify(task)
    }
    )

    fetch(request)
    .then( response => response.json() )
    .then( data => console.log(`${data.title} saved with an id of ${data.id}`) )
    .catch( error => console.log('There was an error:', error))
}

