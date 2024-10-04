// Menu button
const hamburgerMenu = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerMenu.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});

// Footer dates and update
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// getting the last day modified  
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = document.lastModified;

// Main Directory Section

const cards = document.querySelector('#company-cards');

async function getMembersData(){
    const response = await fetch('data/members.json');
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        
        let card = document.createElement('section');
        
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p'); 
        let website = document.createElement('a');
        let logo = document.createElement('img');
        let service = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        name.textContent = `${member.name}`; 
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone Number: ${member.number}`;
        website.innerHTML = `<p>Website: <a href="${member.website}" target="_blank"> Company's Site</a></p>`;
        service.textContent = `Service: ${member.service}`;
        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '50');
        logo.setAttribute('height', '50');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(service);

        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#company-cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// Need to to display the service and the membershipLevel

/*
if member.level = 1 then member, else if = 2 then silver, else = gold

use codepen
*/