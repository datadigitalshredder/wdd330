// PUBLIC CODE
export default class MyGroups {
    constructor(listElement, key) {
        this.listElement = listElement; // Store the listelement inside the class
        this.key = key;
        bindTouch("#addGroup", this.newGroup.bind(this));
        this.listGroups();
    }

    newGroup() {
        const newGroup = document.getElementById("groupInput");
        addGroup(newGroup.value, this.key);
        newGroup.value = "";
        this.listGroups();
    }

    findGroup(id) {
        let group = liveGroups.find( element => {
            return element.id === id;
        });
        return group;
    }

    removeGroupItem(id) {
        console.log(id + 'removed');
        let group = this.findGroup(id);

        if(group){
            deleteGroup(id);
            writeToLocalStorage(this.key, liveGroups);
            renderGroups(liveGroups, this.listElement, this, true);
        }
    }

    listGroups(hidden = true) {
        renderGroups(getGroups(this.key), this.listElement, this, hidden);
    }

}


// PRIVATE CODE- reads and write localStorage


import { querySelection, writeToLocalStorage, readFromLocalStorage, bindTouch } from "./controller.js";

let liveGroups = null;

// Rendering code function
function renderGroups (list, element, groups, hidden) {
    console.log(list); // Start by displaying the list
    element.innerHTML = '';

    list.forEach(groupItem => {
        const item = document.createElement('li');
        const formattedDate = new Date(groupItem.id).toLocaleDateString('en-US');

        let button = null;

        if (hidden && groupItem) {
            item.innerHTML = `${groupItem.content}</label><button>❌</buton>`;
            
        } else {
            item.innerHTML = `<label>${groupItem.content}</label><button>❌</buton>`;

        }

        // attach event listener to the button
        button = item.childNodes[1];
        if(button) {
            button.addEventListener("click", function() {
                groups.removeGroupItem(groupItem.id);
            });
        }
        
        element.appendChild(item);

    });
}
 
function getGroups(key) {
    if (liveGroups === null) {
        // read the list from the data store
        liveGroups = readFromLocalStorage(key) || [];
    }
    return liveGroups;
}

function addGroup(value, key) {
    // add the group with Date using UTC millisecond string as the id
    const newgroupItem = {
        id: new Date(),
        content: value,
        // completed: false
    };
    liveGroups.push(newgroupItem);
    writeToLocalStorage(key, liveGroups);
}

function deleteGroup(key) { 
    let newList = liveGroups.filter(item => item.id != key);
    liveGroups = newList;
    writeToLocalStorage(key, liveGroups);
}