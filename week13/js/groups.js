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

//           var ele = document.getElementById('sel');
//           for (var i = 0; i < birds.length; i++) {
          
//             // Bind data to <select> element.
//             ele.innerHTML = ele.innerHTML +
//               '<option value="' + birds[i].ID + '">' + birds[i].Name + '</option>';
//           }
//         }
//       };
//       xhr.open(method, url, true);
//       xhr.send();
//     }

//     function show(ele) {
//         // Get the selected value from <select> element and show it.
//         var msg = document.getElementById('msg');
//         msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
//             'ID: <b>' + ele.value + '</b>';
//     }


const groups = "https://datadigitalshredder.github.io/wdd330/week13/json/data.json";
console.log(groups);
fetch(groups)
    .then((response) => response.json())

    .then((jsObject) => {

            //Randomly select 1st temple
            let peopleDetails = jsObject.people;
            console.log(peopleDetails);
                
            // const iconsrcdetailed1 = `${templeDetails1.photo}`;
            // const descdetailed1 = `Photo of ${templeDetails1.name}`;
            
            // document.querySelector('#random-name1').innerHTML = templeDetails1.name;
            let ele = document.getElementById('groupCaptain');
            for (let i = 0; i < peopleDetails.length; i++) {
            
              // Bind data to <select> element.
              ele.innerHTML = ele.innerHTML +
              '<option value="' + peopleDetails[i].ID + '">' + peopleDetails[i].name + '</option>';
            }
            
          });
          function show(ele) {
            // Get the selected value from <select> element and show it.
            let msg = document.getElementById('msg');
            msg.innerHTML = '<b>' + ele.options[ele.selectedIndex].text + '</b>';
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