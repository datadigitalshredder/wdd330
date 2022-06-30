const swapiApp = {
    // Call the swapiApp.urls.base to see the contents of the APP urls
    urls: {
        base: 'https://swapi.dev/api/',
        people: 'people/',
        planets: 'planets/',
        films: 'films/',
        species: 'species/',
        vehicles: 'vehicles/',
        starships: 'starships/'
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
        let df = new DocumentFragment();
        for (let named in swapiApp.urls) {
            if (named != 'base') {
                let link = document.createElement('a');
                link.href = `${swapiApp.urls.base}${swapiApp.urls[named]}`;
                link.textContent = named;
                link.setAttribute('data-link', `${swapiApp.urls.base}${swapiApp.urls[named]}`);
                df.append(link);
            }
        }
        document.getElementById('nav').append(df);
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
        let m = document.getElementById('main');
        console.log(data);
        // add the data
        m.innerHTML = data.results
            .map((item) => {
                let nm = item.name || item.title;
                return `<p>${nm}</p>`;
            })
            .join(' ');
        // add the prev/next navigation
        let pageNav = document.getElementById('page-navigation');
        pageNav.innerHTML = '';
        if (data.previous) {
            // link to previous page
            let prev = document.createElement('a');
            prev.href = data.previous;
            let url = new URL(data.previous); 
            let labels = url.pathname.split('/');
            let label = labels[labels.length-2];
            prev.textContent = `<< Previous ${label}`;
            prev.setAttribute('data-link', data.previous);
            pageNav.append(prev);
        }
        if (data.next) {
            // link to next page
            let next = document.createElement('a');
            next.href = data.next;
            let url = new URL(data.next); 
            let labels = url.pathname.split('/');
            let label = labels[labels.length-2];
            next.textContent = `Next ${label} >>`;
            next.setAttribute('data-link', data.next);
            pageNav.append(next);
        }
    },
};

document.addEventListener('DOMContentLoaded', swapiApp.init);