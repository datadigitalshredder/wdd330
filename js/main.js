// ADDING THE YEAR
// Get the element with the id=year and assign it a variable
const year = document.getElementById("year");
// Assign to that element the full year
year.innerHTML = new Date().getFullYear();
//ADDING THE LAST UPDATED DATE
// Get the element with the id=lastupdate and assign it a variable
const lastupdate = document.querySelector('#lastupdate');
// To that variable assign the template literal with text, Last updated, plus uses the property lastModified from the page.
lastupdate.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

// Week 1 - Portfolio build
// Manipulating the DOM
//Create a table of contents for the portfolio
const links = [
    {
      label: "Week1 notes and exercises",
      url: "week1/index.html"
    },
    {
    label: "Week2 notes and exercises",
    url: "week2/index.html"
    },
    {
      label: "Week3 notes and exercises",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes and exercises",
      url: "week4/index.html"
    },
    {
      label: "Week5 notes and exercises",
      url: "week5/index.html"
    },
    {
      label: "Week6 Midterm Checkin",
      url: "week6/index.html"
    },
    {
      label: "Week7 notes and exercises",
      url: "week7/index.html"
    },
    {
      label: "Week8 notes and exercises",
      url: "week8/index.html"
    },
    {
      label: "Week9 notes and exercises",
      url: "week9/index.html"
    },
    {
      label: "Week10 notes and exercises",
      url: "week10/index.html"
    },
    {
      label: "Week11 Project Build",
      url: "week11/index.html"
    },
    {
      label: "Week12 Project Build",
      url: "week12/index.html"
    },
    {
      label: "Week13 Project Build",
      url: "week13/index.html"
    },
    {
      label: "Week14 Final Project",
      url: "week14/index.html"
    },
    {
      label: "Week14 Video",
      url: "week14/video.html"
    }
  ]

const tableListItems = links;
    
tableListItems.forEach(tableItems);

function tableItems(item) {
    // Get the document to create the anhor tag and assign it a variable, weekLink
    let weekLink = document.createElement('a');

    // Assign contents of the array to the anchor variable, weekLink
    weekLink.innerHTML = item.label;
    weekLink.href = item.url; 
    
    // Get the document to create the list items, li, and assign that to the variable listItem
    let listItem = document.createElement('li');

    // Append the populated variable (weekLink - it had the URL) to the list items in HTML
    listItem.appendChild(weekLink);

    // Get the document to populate the ordered list with contents from the array, which are now the variable listItem
    document.querySelector('ol.portfolio-table').appendChild(listItem);
}
