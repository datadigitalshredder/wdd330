const dataSwapi = 'https://swapi.dev/api/people/';

fetch(dataSwapi)
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw Error(response.statusText);
    })
    .then((jsObject) => {
        console.log(jsObject);

        const people = jsObject['results'];
        people.forEach(displayPeople);
    })
    .catch( error => console.log('There was an error!') )
function displayPeople(person) { // Create elements to add to the document
    let card = document.createElement('section'); 
    let h2 = document.createElement('h2');
    let birthYear = document.createElement('p');
    let eyeColor = document.createElement('p');
    let skinColor = document.createElement('p');
    let more = document.createElement('p');

    // Change the textContent property of the h2 and p elements to contain the person's full name and other details
    h2.textContent = `${person.name}`;
    birthYear.textContent = `Birth Year: ${person.birth_year}`;
    eyeColor.textContent = `Eye Color: ${person.eye_color}`;
    skinColor.textContent = `Skin Color: ${person.skin_color}`;
    more.innerHTML = `
                        <ul class="more-details">
                            <li class="homeworld" id="${person.homeworld}"></li>
                            <li class="starship" id="${person.starship}"></li>
                            <li class="films" id="${person.films}"></li>
                        </ul>`

    // Add/append the section(card) with the elements
    card.appendChild(h2);
    card.appendChild(birthYear);
    card.appendChild(eyeColor);
    card.appendChild(skinColor);
    card.appendChild(more);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('section#display').appendChild(card);
    }