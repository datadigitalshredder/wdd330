// WEEK 4 JS READINGS
// const form = document.forms[0]; //returns an HTML collection of all the forms in the document in the order they appear in the markup.
// const form = document.getElementsByTagname('form')[0]; // This is the equivalent using THE DOM
// const form = document.forms.search; // We can also use the form name to identify it, instead of using the index
const form = document.forms['search']; // Best way
console.log(form);

const [input,button] = form.elements;
console.log(input,button);

const formInput = form['searchInput']; //We can also access the form controls using their 'name' attributes as if it was a property of the form object.
console.log(formInput);

// Forms events
//Focus
const inputFocus = form.elements.searchInput;
inputFocus.addEventListener('focus', () => alert('focused'), false);

// Blur
inputFocus.addEventListener('blur', () => alert('blurred'), false);

// Change
inputFocus.addEventListener('change', () => alert('changed'), false);

// Submit
const formSubmit = document.forms['search'];
formSubmit.addEventListener ('submit', search, false);

function search() {
    alert(' Form Submitted');
}

// Prevent submission
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}

// // Search function
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

// Adding a value to the form using JS
input.value = 'Search Here'; // BUT this means the text will remain in the field and must be cleared before searching

// Alternative and best practice
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

// FORM CONTROLS
document.forms.hero.heroName.focus(); // Equivalent of autofocus

// assigning the form to a variable and then adding an event listener for when the form is submitted
const formControls = document.forms['hero'];
formControls.addEventListener('submit', makeHero, false);

// The event listener will invoke the makeHero() function when the form is submitted. This function will return an object based on the information provided in the form. Let’s implement that function by adding this code:
function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = formControls.heroName.value; // create a name property based on the input field's value

    hero.city = formControls.city.value; //  Sets the city property to each selection object that has a value property that’s equal to the 'value' attribute of the <option> tag that was selected.
    hero.origin = formControls.origin.value; // The text entered into this text area can now be added as a property of the hero object 
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

// Checkboxes
// Access the hero's real name (the password/ secret word)
hero.realName = formControls.realName.value;
console.log(hero.realName)

// This means they can be accessed as an HTML collection, like so:
console.log(formControls.powers);

// Now we can iterate over this collection using a for loop to see if each checkbox was checked. Checkbox objects have a checked property that tells us if it has been checked or not. It is a boolean property, so can only have the values true or false. 
hero.powers = []; //hero.powers = [];

for (let i=0; i < formControls.powers.length; i++) { //We then iterate over each checkbox to see if it was checked in the form. 
    if (formControls.powers[i].checked) {
        hero.powers.push(formControls.powers[i].value); //If it was, we add the 'value' property of the checkbox to the powers array using the push method.
    }
}

hero.powers = [...formControls.powers].filter(box => box.checked).map(box => box.value); // Just makes the above code less verbose
console.log(hero.powers);

// Radio buttons
// accessing radio buttons
formControls.category;

// Using JS to manipulate the radio buttons, this will check this button and uncheck others
formControls[2].checked = true;

// Processing the age
hero.age = formControls.age.value;

// Select dropdown list
// The 'name' attribute of the <select> element is used to access it in JavaScript as a property of the form object:
formControls.city; 

// It is also possible to find out the index of the option that has been selected, using the selectedIndex property. For example, if a user selected 'Gotham City' from the menu, form.city.selectedIndex would return 2 because it’s the third option in the list. This can then be used to access the actual text contained in the selected option
console.log(formControls.city.options[formControls.city.selectedIndex].text);

// From the example above, it should be clear that you can access the text of any option using index notation. 
console.log(formControls.city.options[1].text);

// It is also possible to change the value in the form directly:
formControls.origin.value = 'Born as Kal-El on the planet Krypton...';
console.log(formControls.origin.value);

// FORM VALIDATION
// Implement custom form validation using JavaScript.
formControls.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = formControls.heroName.value[0]; // We start by finding the first letter of the value entered in the name field using the index notation (remember that an index of 0 represents the first letter in a string).
    if (firstLetter.toUpperCase() === 'X') { // It then checks to see if the first letter is equal to the string literal 'X', and alerts the user if this is the case.
        event.preventDefault(); //  It also uses the preventDefault() method to stop the form from being submitted. Otherwise it returns true, which means the form is submitted as normal.
        alert('Your name is not allowed to start with X!');
    }
}

// Adding the validation check before submiting the form
const label = formControls.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

// Activating a disabled submit button
function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

formControls.heroName.addEventListener('keyup',disableSubmit,false); // We can apply this to the heroName field by adding the following event handler that will fire every time a key is pressed