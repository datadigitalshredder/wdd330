// Week 1 - Portfolio bulid
// Manipulating the DOM
//Create table of contents for the portfolio
const links = [
    {
      label: "Week1 notes:",
      url: "week1/index.html"
    },
    {
    label: "Week2 notes:",
    url: "week2/index.html"
    }
  ]

const tableListItems = links;
    
tableListItems.forEach(tableItems);

function tableItems(item) {
    // Create elements and assign them variable
    let portfolioItem = document.createElement('span'); 
    let listItem = document.createElement('li'); 
    let url = document.createElement('a');

    // Assign contents of the array to the respective varibles with the elements
    listItem.textContent = `${item.label}`;
    url.textContent = `${item.url}`;

    // Append the populated variables to the span in HTML
    portfolioItem.appendChild(listItem);
    portfolioItem.appendChild(url)

    // Populate the ordered list with contents from the array
    document.querySelector('ol.portfolio-table').appendChild(portfolioItem);

}
