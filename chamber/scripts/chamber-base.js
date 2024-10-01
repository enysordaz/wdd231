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

const cards = document.querySelector('#cards');

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
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p'); 
        let logo = document.createElement('img');
        let level = document.createElement('p');
        let service = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        name.textContent = `${member.name}`; 
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone Number: ${member.number}`;
        level.textContent = `Membership Level: ${member.level}`;
        service.textContent = `Service: ${service}`;
        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '50');
        logo.setAttribute('height', '50');

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(logo);
        card.appendChild(level);
        card.appendChild(service);

        cards.appendChild(card);
    });
}
