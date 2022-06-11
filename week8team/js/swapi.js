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
        const more = jsObject['results'];
        people.forEach(displayPeople);
        more.forEach(navigationBtn);
        
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
                            <li class="homeworld" id="${person.homeworld}"><a href="${person.homeworld}" target="_blank">Homeworld</li>
                            <li class="starship" id="${person.starships}"><a href="${person.homeworld}" target="_blank">Starship</li>
                            <li class="films" id="${person.films}"><a href="${person.homeworld}" target="_blank">Films</li>
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
    

function navigationBtn(navigation) {
    // let next = document.getElementById('next');
    // let prev = document.getElementById('prev');
    const link = `${navigation.next}`;
    console.log(link);
    if (`${navigation.next.results}`) {
        const next = document.getElementById("next");
        // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
        next.ontouchend = () => {
          // notice to show the next page we just re-call the showShips function with a new URL
          displayPeople(navigation.next);
        };
      }
    if (`${navigation.previous}`) {
      const prev = document.getElementById("prev");

      prev.ontouchend = () => {
        displayPeople(navigation.previous);
      };
    }

}