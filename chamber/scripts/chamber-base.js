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

document.addEventListener('DOMContentLoaded', () => {
    const companyCardsDiv = document.getElementById('company-cards');
    const viewGridButton = document.getElementById('view-grid');
    const viewListButton = document.getElementById('view-list');
    let membersData = [];

    // Fetch members data
    async function getMembersData() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            membersData = await response.json();
            displayMembers();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Render members function
    function displayMembers(viewType = 'grid') {
        companyCardsDiv.innerHTML = '';
        companyCardsDiv.className = '';

        companyCardsDiv.classList.add(viewType);

        membersData.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="${member.imageurl}" alt="${member.name} Logo" class="member-logo">
                <h2>${member.name}</h2>
                <p>ADDRESS: ${member.address}</p>
                <p>PHONE: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Company Website</a></p>
                <p>Membership Level: ${member.membershiplevel}</p>
                <p>Service: ${member.service}</p>
            `;

            companyCardsDiv.appendChild(memberCard);
        });
    }

    // Event listeners for view toggles
    viewGridButton.addEventListener('click', () => {
        displayMembers('grid');
    });

    viewListButton.addEventListener('click', () => {
        displayMembers('list');
    });

    // Initial fetch
    getMembersData();
});




/*
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
        let number = document.createElement('p'); 
        let logo = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        name.textContent = `${member.name}`; 
        address.textContent = `Address: ${member.address}`;
        number.textContent = `Phone Number: ${member.number}`;
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

        cards.appendChild(card);
    });
}
*/