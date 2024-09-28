// Menu button
const hamburgerMenu = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerMenu.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});

// Footer dates and update


// Main Directory Section

/*
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.getElementById('company-cards');
    const gridViewButton = document.getElementById('view-grid');
    const listViewButton = document.getElementById('view-list');
    let membersData = [];

    async function getMembersData(){
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error('Network Response was not ok');
            }
            membersData = await response.json();
            displayMembers();
        }catch (error) {
            console.error('There has been a problem with the Fetch operation', error);
        }
    }

    function displayMembers(viewType = 'grid') {
        cards.innerHTML = '';
        cards.className = '';

        cards.classList.add(viewType);

        membersData.forEach (members => {
            const memberCard = document.createElement('section');
            memberCard.classList.add('member-card');
    
            memberCard.innerHTML = `
                <img src="${members.imageurl}" alt="${members.name} Logo" class="member-logo">
                <h3>${members.name}</h3>
                <p>Address: ${members.address}</p>
                <p>Phone Number: ${members.number}</p>
                <p><a href="${members.websiteurl}" target="_blank">Company Website</a></p>
                <p>Membership Level: ${members.membershiplevel}</p>
                <p>Service: ${members.service}</p>
            `;
    
            cards.appendChild(memberCard);
        });
    }

    gridViewButton.addEventListener('click', () => {
        displayMembers('grid');
    });

    listViewButton.addEventListener('click', () => {
        displayMembers('list');
    });

    getMembersData();
});
*/


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
