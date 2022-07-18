// window.onload = populateSelect();

//     function populateSelect() {

//         // Create XMLHttpRequest object, with GET method.
//         var xhr = new XMLHttpRequest(), 
//             method = 'GET',
//             overrideMimeType = 'application/json',
//             url = '../../library/sample.json';  // Add the file URL.

//       xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

//           // Parse JSON data.
//           var birds = JSON.parse(xhr.responseText);

//           var captain = document.getElementById('sel');
//           for (var i = 0; i < birds.length; i++) {
          
//             // Bind data to <select> element.
//             captain.innerHTML = captain.innerHTML +
//               '<option value="' + birds[i].ID + '">' + birds[i].Name + '</option>';
//           }
//         }
//       };
//       xhr.open(method, url, true);
//       xhr.send();
//     }

//     function show(captain) {
//         // Get the selected value from <select> element and show it.
//         var msg = document.getElementById('msg');
//         msg.innerHTML = 'Selected Bird: <b>' + captain.options[captain.selectedIndex].text + '</b> </br>' +
//             'ID: <b>' + captain.value + '</b>';
//     }


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
          });
          function showPlanet(planet) {
            // Get the selected value from <select> element and show it.
            let homePlanet = document.getElementById('details-1');
            homePlanet.innerHTML = `<strong>${planet.options[planet.selectedIndex].text}</strong>`;
          }
          function showCaptain(captain) {
            // Get the selected value from <select> element and show it.
            let groupCaptain = document.getElementById('details-2');
            groupCaptain.innerHTML = '<b>' + captain.options[captain.selectedIndex].text + '</b>';

          // const element = document.getElementById("myBtn");
          // element.addEventListener("click", function() {
          //   document.getElementById("demo").innerHTML = "Hello World";
          // });
          }
          function showMember(members) {
            // Get the selected value from <select> element and show it.
            let groupMembers = document.getElementById('details-3');
            groupMembers.innerHTML = '<b>' + members.options[members.selectedIndex].text + '</b>';
          }

          function addPlanet() {
            const addPlanet = document.getElementById("addPlanet");
            addPlanet.addEventListener("click", function() {
              document.getElementById("details").innerHTML = document.getElementById("details-1").textContent;
            });
          }

          function addCaptain() {
            const addCaptain = document.getElementById("addCaptain");
            addCaptain.addEventListener("click", function() {
              document.getElementById("details").innerHTML = document.getElementById("details-2").textContent;
            });
          }

          function addMember() {
            const addMember = document.getElementById("addMember");
            addMember.addEventListener("click", function() {
              document.getElementById("details").innerHTML = document.getElementById("details-3").textContent;
            });
          }
//             document.querySelector('#random-temple1').setAttribute('src', iconsrcdetailed1);
//             document.querySelector('#random-temple1').setAttribute('alt', descdetailed1);
//             document.querySelector('#random-address1').innerHTML = templeDetails1.address;
//             document.querySelector('#random-telephone1').innerHTML = templeDetails1.telephone;
//             document.querySelector('#random-services1').innerHTML = templeDetails1.services;
//             document.querySelector('#random-floorarea1').innerHTML = templeDetails1.floorarea;
//             document.querySelector('#random-ordinances1').innerHTML = templeDetails1.ordschedule;
//             document.querySelector('#random-session1').innerHTML = templeDetails1.sessionschedule;
//             document.querySelector('#random-dates1').innerHTML = templeDetails1.closuredates;
//             document.querySelector('#random-history1').innerHTML = templeDetails1.history;