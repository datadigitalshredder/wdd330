const swapiApp = {
    // Call the swapiApp.urls.base to see the contents of the APP urls
    urls: {
        base: 'https://swapi.dev/api/',
        films: 'films/',
        people: 'people/',
        planets: 'planets/',
        species: 'species/',
        starships: 'starships/',
        vehicles: 'vehicles/' 
    },
    init: () => {
        swapiApp.addListeners();
        swapiApp.buildNav();
    },
    addListeners: () => {
        let nav = document.getElementById('nav'),
        pageNavigation = document.getElementById('page-navigation');

        nav.addEventListener('click', swapiApp.getData);
        pageNavigation.addEventListener('click', swapiApp.getData);
    },
    buildNav: () => {
        // build the navigation by looping through the urls and skip the base url (skip the base url)
        let docFragment = new DocumentFragment();
        for (let namedUrl in swapiApp.urls) {
            if (namedUrl != 'base') {
                let link = document.createElement('a');
                link.href = `${swapiApp.urls.base}${swapiApp.urls[namedUrl]}`;
                link.textContent = namedUrl;
                link.setAttribute('data-link', `${swapiApp.urls.base}${swapiApp.urls[namedUrl]}`);
                docFragment.append(link);
            }
        }
        document.getElementById('nav').append(docFragment);
    },
    getData: (e) => {
        if (e) e.preventDefault();
        // get the url
        let link = e.target;
        let url = link.getAttribute('data-link');
        // fetch the data
        fetch(url)
            .then((response) => {
                if(!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(swapiApp.buildList)
            .catch(console.error);

    // call the build function
    },
    buildList: (data) => {
        let renderItems = document.getElementById('render-items');
        console.log(data);
        // add the data
        renderItems.innerHTML = data.results
            .map((item) => {
                let itemname = item.name || item.title;
                return `<p>${itemname}</p>`;
            })
            .join(' ');

            // randomly load images to display on each section
            // const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";

            // fetch(templeUrl)
            //     .then((response) => response.json())
            
            //     .then((jsObject) => {
            //             // Randomly select a temple for the home banner
            //             let temple =  jsObject.temples;
            //             randomTemple = temple[Math.floor(Math.random() * temple.length)];
            //             for (let i = 0; i < temple.length; i++){
            //                 const iconsrc = randomTemple.photo;
            //                 const desc = `Photo of ${randomTemple.name}`;
            //                 document.querySelector('#home-image').setAttribute('src', iconsrc);
            //                 document.querySelector('#home-image').setAttribute('alt', desc);
            //             };
            //         })
        // add the prev/next navigation
        let pageNav = document.getElementById('page-navigation');
        pageNav.innerHTML = '';
        if (data.previous) {
            // link to previous page
            let prev = document.createElement('a');
            prev.href = data.previous;
            let url = new URL(data.previous); 
            let labels = url.pathname.split('/');
            let label = labels[labels.length - 2];
            prev.textContent = `<< Prev ${label} |`;
            prev.setAttribute('data-link', data.previous);
            pageNav.append(prev);
        }
        if (data.next) {
            // link to next page
            let next = document.createElement('a');
            next.href = data.next;
            let url = new URL(data.next); 
            let labels = url.pathname.split('/');
            let label = labels[labels.length - 2];
            next.textContent = `| Next ${label} >>`;
            next.setAttribute('data-link', data.next);
            pageNav.append(next);
        }
    },
};

document.addEventListener('DOMContentLoaded', swapiApp.init);