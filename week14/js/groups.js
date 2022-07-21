// import { querySelection, writeToLocalStorage, readFromLocalStorage, bindTouch } from "./utilitis.js";

const groups = "https://datadigitalshredder.github.io/wdd330/week13/json/data.json";
console.log(groups);
fetch(groups)
    .then((response) => response.json())

    .then((jsObject) => {

            //Randomly select 1st temple
            let planets = jsObject.planets,
            peopleDetails = jsObject.people,
            starships = jsObject.starships;

            // console.log(peopleDetails);
            let planet = document.getElementById('homePlanet');
            for (let i = 0; i < planets.length; i++) {
            
              // Bind data to <select> element.
              planet.innerHTML = planet.innerHTML +
              '<option value="' + planets[i].ID + '">' + planets[i].name + '</option>';
            }

            let captain = document.getElementById('groupCaptain');
            for (let i = 0; i < peopleDetails.length; i++) {
            
              // Bind data to <select> element.
              captain.innerHTML = captain.innerHTML +
              '<option value="' + peopleDetails[i].ID + '">' + peopleDetails[i].name + '</option>';
            }
            
            let members = document.getElementById('members');
            for (let i = 0; i < peopleDetails.length; i++) {
            
              // Bind data to <select> element.
              members.innerHTML = members.innerHTML +
              '<option value="' + peopleDetails[i].ID + '">' + peopleDetails[i].name + '</option>';
            }
            // const people = jsObject['people'];
    
            // people.forEach(displayMemberNames);
          });
          function showPlanet(planet) {
            // Get the selected value from <select> element and show it.
            let homePlanet = document.getElementById('details-1');
            homePlanet.innerHTML = `Planet: ${planet.options[planet.selectedIndex].text}`;
          }
          function showCaptain(captain) {
            // Get the selected value from <select> element and show it.
            let groupCaptain = document.getElementById('details-2');
            groupCaptain.innerHTML = `Captain: ${captain.options[captain.selectedIndex].text}`;
            // `Planet: <strong>${planet.options[planet.selectedIndex].text}</strong>`;

          // const element = document.getElementById("myBtn");
          // element.addEventListener("click", function() {
          //   document.getElementById("demo").innerHTML = "Hello World";
          // });
          }
          function showMember(members) {
            // Get the selected value from <select> element and show it.
            let groupMembers = document.getElementById('details-3');
            groupMembers.innerHTML = `Member: ${members.options[members.selectedIndex].text}`;
          }

          function addPlanet() {
            const addPlanet = document.getElementById("addPlanet");
            addPlanet.addEventListener("click", function() {
              document.getElementById("detailsPlanet").innerHTML = document.getElementById("details-1").textContent;
            });
          }

          function addCaptain() {
            const addCaptain = document.getElementById("addCaptain");
            addCaptain.addEventListener("click", function() {
              document.getElementById("detailsCaptain").innerHTML = document.getElementById("details-2").textContent;
            });
          }
          
          function addMember() {
            const addMember = document.getElementById("addMember");
            addMember.addEventListener("click", function() {
              document.getElementById("membersList").innerHTML = document.getElementById("details-3").textContent;
            });
          }

          function displayMembers() { 
            let groupMember = document.getElementById("details-3").textContent;
            let card = document.createElement('section');
            let memberName = document.createElement('p');
            memberName.textContent = `${groupMember}`;
            card.appendChild(memberName);
            document.querySelector('div.cards').appendChild(card);
            
          }

// VALIDATION
let inputName = document.getElementById('todoInput');
let regularEx = /^[0-9a-zA-Z]+$/;
let button = document.querySelector('#addToDo');
let form = document.querySelector('.form');

function validateForm(){
    if (inputName.value !== "" && regularEx.test(inputName.value)){
       button.style.backgroundColor = '#334e30';
       button.disabled = false;
    } else {
       button.style.backgroundColor = '#7e7863';
       button.disabled = true;
    }
}
form.addEventListener('submit', function(event){
     event.preventDefault();
     console.log("submitted")

})
